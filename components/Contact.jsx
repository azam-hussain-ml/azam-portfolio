"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
const LINKEDIN = "https://www.linkedin.com/in/azam-hussain-681695325";
const GITHUB = "https://github.com/azam-hussain-ml";
const EMAIL = "azamsindhu13@gmail.com";
const PHONE = "+92 312 6014216";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  async function handleSubmit(e) {
    e.preventDefault(); setStatus("sending");
    const form = e.target;
    const data = { access_key: WEB3FORMS_KEY, name: form.name.value, email: form.email.value, message: form.message.value, subject: "New message from your portfolio" };
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (json.success) { setStatus("done"); form.reset(); } else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-blue/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            <span className="h-px w-6 bg-cyan" /> Get in touch <span className="h-px w-6 bg-cyan" />
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-fog md:text-5xl">Let&apos;s build something <span className="grad-text">together</span>.</h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-mist">Have a project in mind, or a role that fits? I&apos;d love to hear from you.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
            <h3 className="mb-5 font-display text-xl font-semibold text-fog">Contact Info</h3>
            <div className="space-y-4">
              <Info icon={<Mail size={18} />} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <Info icon={<Phone size={18} />} label="Phone" value={PHONE} href={`tel:${PHONE.replace(/\s/g,"")}`} />
              <Info icon={<MapPin size={18} />} label="Location" value="Lahore, Pakistan" />
            </div>
            <p className="mb-3 mt-8 font-mono text-xs uppercase tracking-wide text-mist">Follow me</p>
            <div className="flex gap-3">
              <Social icon={<Github size={18} />} href={GITHUB} label="GitHub" />
              <Social icon={<Linkedin size={18} />} href={LINKEDIN} label="LinkedIn" />
              <Social icon={<Mail size={18} />} href={`mailto:${EMAIL}`} label="Email" />
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.1 }}
            className="grad-border rounded-2xl bg-panel/50 p-[1px]">
            <div className="rounded-2xl p-7">
              <h3 className="mb-6 font-display text-xl font-semibold text-fog">Send a Message</h3>
              {status === "done" ? (
                <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                  <CheckCircle2 size={40} className="text-cyan" />
                  <p className="font-display text-xl text-fog">Thanks — your message is on its way.</p>
                  <p className="text-sm text-mist">I&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div className="mb-4 grid gap-4 sm:grid-cols-2">
                    <Field name="name" label="Your Name" placeholder="Jane Doe" />
                    <Field name="email" type="email" label="Email" placeholder="jane@example.com" />
                  </div>
                  <div className="mb-5">
                    <label className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-mist">Message</label>
                    <textarea name="message" rows={5} required placeholder="Tell me about your project…"
                      className="w-full resize-none rounded-lg border border-hair bg-night px-4 py-3 text-sm text-fog outline-none placeholder:text-mist/60 focus:border-cyan" />
                  </div>
                  <button type="submit" disabled={status === "sending"}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-grad py-3.5 font-mono text-sm text-night transition hover:opacity-90 disabled:opacity-60">
                    <Send size={15} /> {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                  {status === "error" && <p className="mt-3 text-center text-sm text-cyan">Something went wrong — email me directly at {EMAIL}.</p>}
                  {!WEB3FORMS_KEY && <p className="mt-3 text-center font-mono text-[0.68rem] text-mist">Add NEXT_PUBLIC_WEB3FORMS_KEY in your env to enable delivery.</p>}
                </>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, label, value, href }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-xl border border-hair bg-panel/50 p-4 transition hover:border-blue/50">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-panel2 text-cyan">{icon}</span>
      <div className="min-w-0"><p className="font-mono text-[0.68rem] uppercase tracking-wide text-mist">{label}</p><p className="truncate font-medium text-fog">{value}</p></div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" className="block">{inner}</a> : inner;
}
function Social({ icon, href, label }) {
  return <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-lg border border-hair text-mist transition hover:border-cyan hover:text-cyan">{icon}</a>;
}
function Field({ name, label, type = "text", placeholder }) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-mist">{label}</label>
      <input name={name} type={type} required placeholder={placeholder} className="w-full rounded-lg border border-hair bg-night px-4 py-3 text-sm text-fog outline-none placeholder:text-mist/60 focus:border-cyan" />
    </div>
  );
}
