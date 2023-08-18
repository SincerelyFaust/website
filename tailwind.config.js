const { fontFamily } = require("tailwindcss/defaultTheme");

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
        fontFamily: {
          primary: ["var(--font-inter)", ...fontFamily.sans],
          serif: ["var(--lora-inter)", ...fontFamily.serif],
        },
      },
      screens: {
        "2xl": { max: "1620px" },
        "xl": { max: "1486px" },
        "lg": { max: "1073px" },
        "sm": { max: "514px" },
      },
    },
  },
  plugins: [],
};
