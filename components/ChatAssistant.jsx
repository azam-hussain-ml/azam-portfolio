"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Mic, Bot } from "lucide-react";
import { projects } from "../data/projects";

const SUGGESTIONS = [
  "What kind of AI systems does Azam build?",
  "Tell me about the RAG project",
  "What's his strongest skill?",
];

// Simple offline responder over the projects data (used if the API is down)
function offlineReply(text) {
  const q = text.toLowerCase();
  const hit = projects.find(
    (p) => q.includes(p.title.toLowerCase().split(" ")[0]) ||
      p.stack.some((s) => q.includes(s.toLowerCase()))
  );
  if (hit) {
    return `${hit.title} — ${hit.description} Built with ${hit.stack.join(", ")}.`;
  }
  if (q.includes("skill") || q.includes("strong")) {
    return "Azam specialises in retrieval-augmented (RAG) systems that answer from private documents with full source traceability, backed by 8 years of healthcare data experience.";
  }
  return "I'm running in offline mode right now. Azam is an AI/ML Engineer focused on Generative AI and RAG systems. Ask about a specific project, or reach him at azamsindhu13@gmail.com.";
}

// Find projects the assistant's reply refers to, to render as cards
function matchProjects(text) {
  const t = text.toLowerCase();
  return projects.filter((p) => t.includes(p.title.toLowerCase().split(" ")[0].toLowerCase()));
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Azam's AI assistant. Ask me anything about his work, skills, or projects." },
  ]);
  const scrollRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  // set up voice input (Web Speech API — browser native, no cost)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    const rec = new SR();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.onresult = (e) => setInput(e.results[0][0].transcript);
    rec.onend = () => setListening(false);
    recognitionRef.current = rec;
  }, []);

  function toggleVoice() {
    const rec = recognitionRef.current;
    if (!rec) return alert("Voice input isn't supported in this browser.");
    if (listening) {
      rec.stop();
      setListening(false);
    } else {
      setListening(true);
      rec.start();
    }
  }

  async function send(text) {
    const content = (text ?? input).trim();
    if (!content || busy) return;
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-8) }),
      });
      if (!res.ok) throw new Error("api");
      const data = await res.json();
      const reply = data.reply || offlineReply(content);
      setMessages((m) => [...m, { role: "assistant", content: reply, cards: matchProjects(reply) }]);
    } catch {
      const reply = offlineReply(content);
      setMessages((m) => [...m, { role: "assistant", content: reply, cards: matchProjects(reply) }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open AI assistant"
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-grad text-night shadow-xl transition hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageSquare size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-[60] flex h-[520px] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-hair bg-panel text-fog shadow-2xl"
          >
            {/* header */}
            <div className="flex items-center gap-2.5 border-b border-hair px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-panel2">
                <Bot size={16} className="text-cyan" />
              </span>
              <div>
                <p className="text-sm font-semibold leading-none">Azam&apos;s AI Assistant</p>
                <p className="mt-1 font-mono text-[0.6rem] text-mist">project-aware · voice-enabled</p>
              </div>
            </div>

            {/* messages */}
            <div ref={scrollRef} className="chat-scroll flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                  <div
                    className={`inline-block max-w-[85%] rounded-2xl px-3.5 py-2 text-sm ${
                      m.role === "user"
                        ? "bg-grad text-night"
                        : "bg-panel2 text-fog/90"
                    }`}
                  >
                    {m.content}
                  </div>
                  {/* rich project cards */}
                  {m.cards && m.cards.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {m.cards.map((p) => (
                        <a
                          key={p.title}
                          href={p.github || "#projects"}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-lg border border-hair bg-panel2/60 p-3 text-left transition hover:border-cyan"
                        >
                          <p className="font-mono text-xs text-cyan">{p.title}</p>
                          <p className="mt-1 text-[0.72rem] text-mist">{p.stack.join(" · ")}</p>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {busy && (
                <div className="text-left">
                  <div className="inline-block rounded-2xl bg-panel2 px-3.5 py-2 text-sm text-mist">
                    thinking…
                  </div>
                </div>
              )}

              {/* starter suggestions */}
              {messages.length === 1 && (
                <div className="space-y-2 pt-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="block w-full rounded-lg border border-hair px-3 py-2 text-left text-xs text-mist transition hover:border-cyan hover:text-fog"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* input */}
            <div className="flex items-center gap-2 border-t border-hair p-3">
              <button
                onClick={toggleVoice}
                aria-label="Voice input"
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                  listening ? "bg-grad text-night" : "bg-panel2 text-mist hover:text-fog"
                }`}
              >
                <Mic size={16} />
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={listening ? "Listening…" : "Ask about Azam's work…"}
                className="flex-1 rounded-full bg-panel2 px-4 py-2 text-sm outline-none placeholder:text-mist/70"
              />
              <button
                onClick={() => send()}
                disabled={busy}
                aria-label="Send"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-clay text-fog transition hover:opacity-90 disabled:opacity-50"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
