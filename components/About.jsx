"use client";
import { motion } from "framer-motion";

const facts = [
  ["Role","AI/ML Engineer"],["Focus","GenAI · RAG · LLMs"],["Based in","Lahore, Pakistan"],
  ["Work","Remote-first"],["Domain","RAG · AI Agents"],["Current","FlyRank AI"],
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1.3fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <div className="mb-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            <span className="h-px w-6 bg-cyan" /> About
          </div>
          <h2 className="mb-5 max-w-[20ch] font-display text-3xl font-bold leading-tight tracking-tight text-fog md:text-4xl">
            Most engineers can wire up an LLM. Fewer can make it <span className="grad-text">trustworthy</span>.
          </h2>
          <p className="mb-4 max-w-[54ch] text-lg text-fog">
            I specialise in retrieval-augmented systems — the kind that answer from private,
            sensitive documents and can always point back to the source.
          </p>
          <p className="max-w-[54ch] text-mist">
            Today I'm an AI/ML Engineer Intern at FlyRank AI while completing an MSc in Computer Science. My work sits at the LLM application layer — RAG, agents, and multimodal pipelines — with a focus on systems that are accurate, source-backed, and production-ready.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.1 }}
          className="grad-border rounded-2xl bg-panel/50 p-2">
          <div className="rounded-xl border border-hair/60 p-5">
            {facts.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4 border-b border-hair py-3.5 text-sm last:border-0">
                <span className="font-mono text-xs uppercase tracking-wide text-mist">{k}</span>
                <span className="text-right font-medium text-fog">{v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}