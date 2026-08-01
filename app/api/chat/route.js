import { NextResponse } from "next/server";
import { rateLimit } from "../../../lib/rateLimit";
import { projects } from "../../../data/projects";

export const runtime = "nodejs";

// Build the system prompt from your real project data => "project-aware"
function buildSystem() {
  const list = projects
    .map((p) => `- ${p.title} (${p.category}): ${p.description} Stack: ${p.stack.join(", ")}. Metric: ${p.metric}.`)
    .join("\n");

  return `You are the AI assistant on Azam Hussain's portfolio website.
Azam is an AI/ML Engineer based in Lahore, Pakistan, specialising in Generative AI and RAG systems that answer from private documents with source traceability. He has 8 years of healthcare data management experience and is an AI/ML Engineer Intern at FlyRank AI while completing an MSc in Computer Science.

Answer questions about Azam warmly, concisely (2-4 sentences), and in first person about him ("Azam built…", "He specialises in…"). If asked about a project, mention it by name so the site can show its card. If you don't know something, suggest emailing azamsindhu13@gmail.com. Never invent facts.

Azam's projects:
${list}`;
}

export async function POST(req) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anon";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please slow down." },
      { status: 429 }
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // No key configured -> tell client to use its offline fallback
    return NextResponse.json({ error: "no_key" }, { status: 503 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const history = (body.messages || [])
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => ({ role: m.role, content: String(m.content).slice(0, 2000) }));

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: buildSystem(),
        messages: history,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "upstream" }, { status: 502 });
    }

    const data = await res.json();
    const reply = data.content?.map((c) => c.text || "").join("").trim();
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: "network" }, { status: 502 });
  }
}
