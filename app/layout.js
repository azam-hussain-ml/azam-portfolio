import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import {
  Inter,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://azam-portfolio-pi.vercel.app"),

  title: "Azam Hussain — AI/ML Engineer",

  description:
    "AI/ML Engineer specialising in LLMs, RAG, AI agents, and machine learning — building practical, production-ready AI applications.",

  openGraph: {
    title: "Azam Hussain — AI/ML Engineer",

    description:
      "Building intelligent systems with AI, ML & Generative AI. Based in Lahore, Pakistan.",

    url: "https://azam-portfolio-pi.vercel.app",

    siteName: "Azam Hussain Portfolio",

    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body className="font-body">
        {children}
        <Analytics />
      </body>
    </html>
  );
}