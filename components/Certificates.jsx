"use client";
import { motion } from "framer-motion";
import { BadgeCheck, Award } from "lucide-react";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          <span className="h-px w-6 bg-cyan" /> Certificates
        </div>
        <h2 className="mb-9 font-display text-3xl font-bold tracking-tight text-fog md:text-4xl">Training and proof.</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="overflow-hidden rounded-xl border border-hair bg-panel/50 transition duration-300 hover:-translate-y-1 hover:border-blue/50 hover:shadow-xl hover:shadow-blue/10">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-hair bg-panel2">
                {c.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.image} alt={c.title} className="h-full w-full object-contain" />
                ) : (<Award size={34} className="text-mist" />)}
                <span className="absolute left-3 top-3 rounded bg-night/70 px-1.5 py-0.5 font-mono text-xs text-mist">{String(i + 1).padStart(2, "0")}</span>
                {c.verified && (
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-grad px-2.5 py-1 font-mono text-[0.6rem] text-night">
                    <BadgeCheck size={12} /> VERIFIED
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold leading-tight text-fog">{c.title}</h3>
                <p className="mt-1 text-sm text-mist">{c.issuer}</p>
                <p className="mt-2 font-mono text-xs text-mist">{c.date}</p>
                {c.credentialId && <p className="mt-1 font-mono text-[0.65rem] text-mist/80">ID {c.credentialId}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
