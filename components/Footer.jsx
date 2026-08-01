import { Github, Linkedin, Mail, MapPin, Phone, ArrowRight, ArrowUp } from "lucide-react";

const LINKEDIN = "https://www.linkedin.com/in/azam-hussain-681695325";
const GITHUB = "https://github.com/azam-hussain-ml";
const EMAIL = "azamsindhu13@gmail.com";
const PHONE = "+92 312 6014216";
const links = [["About","#about"],["Skills","#skills"],["Projects","#projects"],["Services","#services"],["Certificates","#certificates"]];

export default function Footer() {
  return (
    <footer className="border-t border-hair">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-5 w-5 rounded-md bg-grad" />
              <span className="font-display text-sm font-bold tracking-[0.14em] text-fog">AZAM HUSSAIN</span>
            </div>
            <p className="mt-3 max-w-[34ch] text-sm text-mist">Building intelligent systems with AI, ML &amp; Generative AI.</p>
            <div className="mt-5 flex gap-3">
              <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-lg border border-hair text-mist transition hover:border-cyan hover:text-cyan"><Github size={16} /></a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-lg border border-hair text-mist transition hover:border-cyan hover:text-cyan"><Linkedin size={16} /></a>
              <a href={`mailto:${EMAIL}`} aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-lg border border-hair text-mist transition hover:border-cyan hover:text-cyan"><Mail size={16} /></a>
            </div>
          </div>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wide text-fog">Quick Links</p>
            <ul className="space-y-2.5 text-sm">{links.map(([l,h])=>(<li key={h}><a href={h} className="text-mist transition hover:text-cyan">{l}</a></li>))}</ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wide text-fog">Contact</p>
            <ul className="space-y-3 text-sm text-mist">
              <li className="flex items-center gap-2.5"><Mail size={15} className="text-cyan" /><a href={`mailto:${EMAIL}`} className="transition hover:text-cyan break-all">{EMAIL}</a></li>
              <li className="flex items-center gap-2.5"><MapPin size={15} className="text-cyan" /> Lahore, Pakistan</li>
              <li className="flex items-center gap-2.5"><Phone size={15} className="text-cyan" /> {PHONE}</li>
            </ul>
          </div>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-wide text-fog">Let&apos;s Connect</p>
            <p className="mb-4 text-sm text-mist">Have a project in mind? Let&apos;s work together.</p>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-grad px-5 py-2.5 font-mono text-xs text-night transition hover:opacity-90">Get in Touch <ArrowRight size={14} /></a>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-hair pt-6 font-mono text-xs text-mist">
          <span>© {new Date().getFullYear()} Azam Hussain · All rights reserved</span>
          <span className="hidden sm:block">Built with Next.js &amp; Tailwind</span>
          <a href="#top" className="flex items-center gap-1.5 transition hover:text-cyan">Back to top <ArrowUp size={13} /></a>
        </div>
      </div>
    </footer>
  );
}
