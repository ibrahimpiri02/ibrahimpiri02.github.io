/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: "#009a8c", dark: "#007a6f", light: "#5fd8c6", wash: "#e8f6f4" },
        night: { DEFAULT: "#081114", soft: "#0f1d21" },
        ink: { DEFAULT: "#111418", soft: "#4a5058", faint: "#646b74" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Helvetica", "Arial", "sans-serif"],
        serif: ["Newsreader", "Georgia", "Times New Roman", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
