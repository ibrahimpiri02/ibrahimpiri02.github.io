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
          DEFAULT: '#009a8c', // Tailwind blue-600
          light: '#009a8c', // blue-500
          dark: '#008075', // blue-800
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
