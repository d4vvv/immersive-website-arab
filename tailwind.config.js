/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #291f3b 20%, #796c91 100%)",
      },
      fontFamily: {
        Lexend: ["Lexend", ...defaultTheme.fontFamily.mono],
        Dela: [
          '"Dela Gothic One", Helvetica, sans-serif',
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
