const { Bebas_Neue } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasNeue: ["Bebas Neue", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    colors: {
      background: "#1F1F1F",
      white: "#ffffff",
    },
  },
  plugins: [],
};
