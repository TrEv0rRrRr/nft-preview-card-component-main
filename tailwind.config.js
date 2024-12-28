/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Main-BG": "hsl(217, 54%, 11%)",
        "Card-BG": "hsl(216, 50%, 16%)",
        "Line-Color": "hsl(215, 32%, 27%)",
        "Soft-Blue": "hsl(215, 51%, 70%)",
        "Cyan-Color": "hsl(178, 100%, 50%)",
      },
      fontFamily: {
        Outfit: "Outfit",
      },
    },
  },
  plugins: [],
};
