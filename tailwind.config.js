/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        night: "#0A0B12",
        panel: "#12141E",
        panel2: "#191D2A",
        hair: "#262B3D",
        fog: "#EAECF5",
        mist: "#888FA8",
        blue: "#4B7BFF",
        cyan: "#34D3F5",
        violet: "#A472FF",
      },

      fontFamily: {
        display: [
          "var(--font-space-grotesk)",
          "sans-serif",
        ],

        body: [
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],

        mono: [
          "var(--font-jetbrains-mono)",
          "monospace",
        ],
      },

      backgroundImage: {
        grad:
          "linear-gradient(90deg,#4B7BFF,#34D3F5,#A472FF)",
      },
    },
  },

  plugins: [],
};