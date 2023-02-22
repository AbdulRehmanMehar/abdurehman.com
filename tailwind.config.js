/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...require("tailwindcss/colors"),
        primary: "#e05751",
        secondary: "#ef852b",
      },
    },
  },
  plugins: [],
};
