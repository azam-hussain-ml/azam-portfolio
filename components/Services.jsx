"use client";
import { motion } from "framer-motion";
import { Search, Cpu, Layers, MessageSquare, LineChart, Plug } from "lucide-react";

const services = [
  { icon: <Search size={22} />, title: "RAG System Development", desc: "Retrieval systems that answer from your private documents with full source traceability." },
  { icon: <Cpu size={22} />, title: "LLM Application Development", desc: "End-to-end LLM apps — prompt design, evaluation, deployment — on the OpenAI and Claude APIs." },
  { icon: <Layers size={22} />, title: "Multimodal AI", desc: "Assistants that combine speech, vision, text, and image generation in one pipeline." },
  { icon: <MessageSquare size={22} />, title: "AI Chatbots & Assistants", desc: "Domain-focused conversational assistants with grounding and production-ready guardrails." },
  { icon: <LineChart size={22} />, title: "ML Model Development", desc: "Custom classification and prediction models, trained, tuned, and evaluated end-to-end." },
  { icon: <Plug size={22} />, title: "AI Integration & Consulting", desc: "Bringing AI features into your product — from proof-of-concept to production." },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          <span className="h-px w-6 bg-cyan" /> Services
        </div>
        <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-fog md:text-4xl">How I can help.</h2>
        <p className="mb-10 max-w-[52ch] text-mist">Practical AI and machine-learning work, from a first prototype to a deployed, dependable system.</p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-hair bg-panel/50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue/50 hover:shadow-xl hover:shadow-blue/10">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-panel2 text-cyan transition group-hover:bg-grad group-hover:text-night">{s.icon}</span>
              <h3 className="mb-2 font-display text-lg font-semibold text-fog">{s.title}</h3>
              <p className="text-sm text-mist">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
