# Azam Hussain — Portfolio

A Next.js 14 portfolio with Tailwind CSS, Framer Motion animations, a project-aware AI assistant (with voice input), live GitHub activity, and a working contact form. Built to deploy on Vercel.

---

## 1. Run it on your own computer first

You need **Node.js 18+** installed (download from https://nodejs.org).

```bash
npm install      # install everything (once)
npm run dev      # start the site
```

Open http://localhost:3000 in your browser. Every time you save a file, the site updates automatically.

---

## 2. The only files you edit to change content

| What you want to change | File to open |
|---|---|
| Your projects | `data/projects.js` |
| Your certificates | `data/certificates.js` |
| Project screenshots | drop images in `public/projects/`, then point to them in `data/projects.js` |
| Certificate images | drop images in `public/certificates/`, then point to them in `data/certificates.js` |
| Your resume | replace `public/resume.pdf` with your real PDF (keep the same name) |
| Your LinkedIn URL | `components/Contact.jsx` (search for "your-handle") |
| About text, name, headline | `components/Hero.jsx` and `components/About.jsx` |

You do **not** need to touch the design code to update your content.

---

## 3. Set up the extras (optional but recommended)

Copy `.env.local.example` to a new file named `.env.local` and fill in:

- **AI assistant** — get a key at https://console.anthropic.com and set `ANTHROPIC_API_KEY`.
  Without it, the assistant still works in a simpler offline mode.
- **Contact form** — get a free key at https://web3forms.com and set `NEXT_PUBLIC_WEB3FORMS_KEY`.
  Messages then arrive in your email. Without it, the form shows a note.
- **GitHub section** — set `NEXT_PUBLIC_GITHUB_USERNAME` (defaults to `azam-hussain-ml`).

---

## 4. Put it on GitHub

```bash
git init
git add .
git commit -m "My portfolio"
```

Create a new **public** repo on github.com (e.g. `portfolio`), then:

```bash
git remote add origin https://github.com/azam-hussain-ml/portfolio.git
git branch -M main
git push -u origin main
```

---

## 5. Deploy on Vercel (free)

1. Go to https://vercel.com and sign in **with GitHub**.
2. Click **Add New → Project**, then **Import** your `portfolio` repo.
3. Vercel auto-detects Next.js — you don't change any build settings.
4. Open **Environment Variables** and add the same keys from your `.env.local`
   (`ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL`, `NEXT_PUBLIC_WEB3FORMS_KEY`, `NEXT_PUBLIC_GITHUB_USERNAME`).
5. Click **Deploy**. In ~1 minute you get a live URL like `portfolio-azam.vercel.app`.

**Updating later:** just `git push` your changes — Vercel redeploys automatically.

**Custom domain:** in your Vercel project → Settings → Domains, add a domain
you own (e.g. `azamhussain.dev`). Your URL stays the same forever after that.

---

## Tech
Next.js 14 · React 18 · Tailwind CSS 3 · Framer Motion · lucide-react · Anthropic API (serverless route) · Web Speech API (voice) · Web3Forms (contact).
