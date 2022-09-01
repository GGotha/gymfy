/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "390px",
      },
      fontFamily: {
        saira: ["Saira", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primaryBlack: "#0D0D0D",
        primaryWhite: "#FFFFFF",
        primaryGrey: "#BFBFBF",
        secondaryGreen: "#34D178",
        secondaryRed: "#FF0000",
        gradientOne: "#0042FF",
        gradientTwo: "#EB001B",
      },
    },
  },
  plugins: [],
};
