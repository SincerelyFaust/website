const defaultTheme = require("tailwindcss/defaultTheme");
const { JsxEmit } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "2xl": { max: "1620px" },
        "xl": { max: "1486px" },
        "lg": { max: "1073px" },
        "md": { max: "978px" },
        "sm": { max: "514px" },
      },
      borderRadius: {
        "4xl": "90px",
      },
      fontSize: {
        sg: "16px",
      },
    },
  },
  plugins: [],
};
