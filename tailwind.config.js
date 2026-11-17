/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: "#009a8c", dark: "#007a6f" },
        ink: { DEFAULT: "#111418", soft: "#4a5058", faint: "#8a9099" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Helvetica", "Arial", "sans-serif"],
        serif: ["Newsreader", "Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
