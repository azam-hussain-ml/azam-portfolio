"use client";
import { motion } from "framer-motion";

const brands = ["Anthropic", "Microsoft Azure", "FlyRank AI", "OpenAI", "Hugging Face", "CodePath"];

export default function LogoStrip() {
  return (
    <section className="border-y border-hair bg-panel/30">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <p className="mb-5 text-center font-mono text-[0.68rem] uppercase tracking-[0.2em] text-mist">
          Certified &amp; building with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {brands.map((b, i) => (
            <motion.span
              key={b}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-2 font-display text-lg font-semibold text-mist/70 transition hover:text-fog"
            >
              <span className="h-2 w-2 rounded-sm bg-grad" />
              {b}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
