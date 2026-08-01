"use client";
import { motion } from "framer-motion";

const groups = [
  { title: "LLM & RAG", items: ["LangChain","ChromaDB","Vector search","Retrieval pipelines","Prompt design","Agents","Evaluation"] },
  { title: "Multimodal", items: ["Whisper (ASR)","GPT-4o-mini","Text-to-Speech","Image generation","OpenAI & Gemini APIs"] },
  { title: "ML Foundations", items: ["Python","TensorFlow","Keras","PyTorch","Scikit-learn","Pandas","NumPy"] },
  { title: "Deployment & Cloud", items: ["Streamlit","Flask","Vercel","Azure (AI-900)","Git / GitHub","Google Colab"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          <span className="h-px w-6 bg-cyan" /> Skills
        </div>
        <h2 className="mb-9 font-display text-3xl font-bold tracking-tight text-fog md:text-4xl">The stack I build with.</h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {groups.map((g, i) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-hair bg-panel/50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue/50 hover:shadow-xl hover:shadow-blue/10">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-cyan">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li key={it} className="rounded-md border border-hair bg-panel2 px-2.5 py-1 text-sm text-fog/90">{it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
