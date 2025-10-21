/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2563eb', // Tailwind blue-600
          light: '#3b82f6', // blue-500
          dark: '#1e40af', // blue-800
        },
      },
      fontFamily: {
        classic: [
          'Georgia',
          'Times New Roman',
          'serif',
        ],
        sans: [
          'Inter',
          'system-ui',
          'Avenir',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
