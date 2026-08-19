"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

const filters = ["All", "GenAI", "ML"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const shown =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          <span className="h-px w-6 bg-cyan" />
          Projects
        </div>

        <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-fog md:text-4xl">
          Featured Projects
        </h2>

        <p className="mb-9 max-w-[52ch] text-mist">
          Systems I&apos;ve designed, built, and deployed — grouped so you can
          jump straight to what matters.
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-5 py-2 font-mono text-xs transition ${
                active === f
                  ? "border-transparent bg-grad text-night"
                  : "border-hair text-mist hover:border-mist"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col overflow-hidden rounded-2xl border border-hair bg-panel/50 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-blue/50 hover:shadow-xl hover:shadow-blue/10"
              >
                <div className="relative aspect-video overflow-hidden bg-panel2">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) calc(50vw - 36px), 370px"
                      className="object-cover"
                    />
                  ) : null}

                  <span className="absolute left-3 top-3 rounded-full border border-hair bg-night/80 px-2.5 py-1 font-mono text-[0.6rem] text-cyan">
                    {p.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-display text-lg font-semibold leading-tight text-fog">
                    {p.title}
                  </h3>

                  {p.metric && (
                    <span className="mb-3 w-fit rounded border border-hair bg-panel2 px-2 py-0.5 font-mono text-[0.68rem] text-cyan">
                      {p.metric}
                    </span>
                  )}

                  <p className="mb-5 flex-1 text-sm text-mist">
                    {p.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-[3px] border border-hair px-2 py-1 font-mono text-[0.62rem] text-fog/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={p.live || p.github || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-fog px-3 py-2.5 font-mono text-xs text-night transition hover:opacity-90"
                    >
                      <ExternalLink size={13} />
                      View Project
                    </a>

                    <a
                      href={p.github || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-hair px-3 py-2.5 font-mono text-xs text-fog transition hover:border-mist"
                    >
                      <Github size={13} />
                      GitHub Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}