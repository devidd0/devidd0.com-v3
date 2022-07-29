/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeYellow: "#FBD38D",
        themeCyan: "#80E5D8",
        themePink: "#F660BC",
      },
    },
  },
  plugins: [],
};
