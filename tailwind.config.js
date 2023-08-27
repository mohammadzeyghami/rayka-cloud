/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          light: "#6DEDCE",
          dark: "#0E8165",
        },
        main: {
          gray: "#F7F6FB",
        },

        gray: "#A8A6B0",
      },
    },
  },
  plugins: [],
};
