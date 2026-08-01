"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Projects", "#projects"], ["Skills", "#skills"], ["Experience", "#experience"],
  ["Certificates", "#certificates"], ["About", "#about"], ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${scrolled ? "border-hair bg-night/90 shadow-lg shadow-black/40" : "border-transparent bg-night/50"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="h-8 w-8 rounded-md bg-grad" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm tracking-[0.12em] text-fog" style={{ fontWeight: 700 }}>AZAM HUSSAIN</span>
            <span className="mt-1 font-mono text-[0.6rem] text-mist">AI Engineer • Generative AI • RAG</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-mist transition-colors hover:text-fog">{l}</a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-fog px-4 py-2 text-xs font-medium text-night transition hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.5)] lg:block">
          Get in touch
        </a>

        <button className="lg:hidden text-fog" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-1 border-t border-hair bg-night/95 px-6 pb-4 lg:hidden">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 text-sm text-mist">{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-fog px-4 py-2 text-center text-sm font-medium text-night">Get in touch</a>
        </div>
      )}
    </nav>
  );
}
