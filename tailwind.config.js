/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          lightest: "#6DEDCE",
          light: "#14A784",
          dark: "#0E8165",
        },
        main: {
          gray: "#F7F6FB",
        },
        red: "#EE0B0B",
        purple: "##7056E8",
        orange: "#FF630B",
        gray: "#A8A6B0",
      },
      screens: {
        "3xl": "1845px",
        "2xl": "1245px",
        // => @media (min-width: 1536px) { ... }
      },
      borderRadius: {
        md: "22px",
      },
    },
  },
  plugins: [],
};
