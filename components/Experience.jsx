"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const roles = [
  {
    title: "AI/ML Engineer Intern",
    org: "FlyRank AI",
    period: "2026 — Present",
    points: [
      "Took LLM-powered features from prototype to working product, owning OpenAI API integration and prompt design end to end.",
      "Replaced ad-hoc prompt tuning with a held-out test-query evaluation set, turning subjective quality into a measurable pass rate.",
      "Converted an ambiguous business brief into a defined ranking problem — target variable, features, and metric — for a content-opportunity-scoring model.",
    ],
  },
  {
    title: "AI/ML Intern",
    org: "CareerCore, Lahore",
    period: "2026 · 3 months",
    points: [
      "Delivered three production-ready models solo: a 7-class skin-disease CNN (89% accuracy), a sentiment analyzer (87% F1 across 50,000 reviews), and a fraud detector (95% precision, 91% recall on 284,807 transactions).",
      "Cut fraud false negatives 22% against baseline with SMOTE on a 99.83%-imbalanced dataset; gained 4–6% F1 by benchmarking multiple classifiers.",
      "Rescued a stalled image classifier via MobileNet transfer learning, cutting overfitting 18%.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          <span className="h-px w-6 bg-cyan" /> Experience
        </div>
        <h2 className="mb-10 font-display text-3xl font-bold tracking-tight text-fog md:text-4xl">Where I&apos;ve worked.</h2>

        <div className="relative border-l border-hair pl-8">
          {roles.map((r, i) => (
            <motion.div
              key={r.title + r.org}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-hair bg-panel text-cyan">
                <Briefcase size={12} />
              </span>
              <div className="rounded-2xl border border-hair bg-panel/50 p-6 transition duration-300 hover:border-blue/50">
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-fog">
                    {r.title} <span className="text-cyan">· {r.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-mist">{r.period}</span>
                </div>
                <ul className="space-y-2">
                  {r.points.map((p, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-mist">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-grad" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
