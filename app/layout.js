import "./globals.css";

export const metadata = {
  title: "Azam Hussain — AI/ML Engineer",
  description:
    "AI/ML Engineer specialising in LLMs, RAG, AI agents, and machine learning — building practical, production-ready AI applications.",
  openGraph: {
    title: "Azam Hussain — AI/ML Engineer",
    description: "Building intelligent systems with AI, ML & Generative AI. Based in Lahore, Pakistan.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
