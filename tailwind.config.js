/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        themeYellow: "#FBD38D",
        themeCyan: "#80E5D8",
        themePink: "#F660BC",
        themeBlack: "#202023",
        themePurple: "#805AD5",
      },
    },
  },
  plugins: [],
};
