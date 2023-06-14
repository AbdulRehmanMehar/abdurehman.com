/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: "all",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...require("tailwindcss/colors"),
        primary: "#e05751",
        secondary: "#ef852b",
        "primary-dark": "#8b2a10",

        black: "#222222",
        white: "#FFFFFF",
        purple: "#4B4E6D",
        yellow: "#FCAF58",
        red: "#D90368",

        "gray-ish": "#95A3B3",
        "faded-white": "#F8F8F8",
        "light-black": "#545454",
      },
      screens: {
        sm: { min: "100px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
