/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      perspective: {
        500: "500px",
      },
      backfaceVisibility: ['hidden'], // Adds custom utility
    },
  },
  plugins: [],
};

