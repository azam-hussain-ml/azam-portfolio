"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Check,
} from "lucide-react";

const GITHUB = "https://github.com/azam-hussain-ml";
const LINKEDIN = "https://www.linkedin.com/in/azam-hussain-681695325";

const TRUST = [
  "10+ AI Projects",
  "20+ AI/ML Certifications",
  "Azure AI-900 Certified",
  "Open to Onsite & Remote",
];

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
});

export default function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/4 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue/20 blur-[120px]" />

      <div className="pointer-events-none absolute right-10 top-40 h-[360px] w-[360px] rounded-full bg-violet/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-[1.35fr_0.65fr] md:py-28">
        <div>
          <motion.div
            {...fade(0)}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-hair bg-panel/60 px-4 py-2 text-xs text-mist"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan" />
            Available for AI/ML Roles &amp; Internships
          </motion.div>

          <motion.h1
            {...fade(0.05)}
            className="font-display text-5xl font-bold leading-[1.06] tracking-tight text-fog md:text-6xl"
          >
            Building production-ready AI applications with{" "}
            <span className="grad-text">
              LLMs, RAG &amp; AI Agents
            </span>
          </motion.h1>

          <motion.p
            {...fade(0.12)}
            className="mt-6 max-w-[56ch] text-lg text-mist"
          >
            I build production-ready AI applications using LLMs,
            Retrieval-Augmented Generation (RAG), and AI Agents to deliver
            accurate, source-backed answers for real-world business problems.
          </motion.p>

          <motion.ul
            {...fade(0.18)}
            className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5"
          >
            {TRUST.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 text-sm text-fog/90"
              >
                <Check size={15} className="text-cyan" />
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div
            {...fade(0.24)}
            className="mt-9 flex flex-wrap gap-3.5"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-fog px-6 py-3 text-sm font-medium text-night transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_-4px_rgba(255,255,255,0.5)]"
            >
              Explore Projects
              <ArrowRight size={15} />
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-hair bg-panel/40 px-6 py-3 text-sm text-fog transition hover:-translate-y-0.5 hover:border-cyan hover:shadow-[0_0_28px_-6px_rgba(52,211,245,0.55)]"
            >
              <Github size={15} />
              GitHub
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-hair bg-panel/40 px-6 py-3 text-sm text-fog transition hover:-translate-y-0.5 hover:border-cyan hover:shadow-[0_0_28px_-6px_rgba(52,211,245,0.55)]"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-hair bg-panel/40 px-6 py-3 text-sm text-fog transition hover:-translate-y-0.5 hover:border-cyan hover:shadow-[0_0_28px_-6px_rgba(52,211,245,0.55)]"
            >
              <Download size={15} />
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-[62%] max-w-[256px] md:w-[86%]"
        >
          <div className="pointer-events-none absolute inset-0 scale-110 rounded-full bg-grad opacity-30 blur-3xl" />

          <div className="absolute inset-[-18px] rounded-full border border-hair/70" />

          <div className="absolute inset-[-36px] rounded-full border border-hair/40" />

          <div className="grad-border relative rounded-full p-[2px]">
            <div className="rounded-full bg-night p-2">
              <Image
                src="/azam.jpg"
                alt="Azam Hussain"
                width={256}
                height={256}
                sizes="(max-width: 767px) 160px, 256px"
                priority
                className="aspect-square w-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}