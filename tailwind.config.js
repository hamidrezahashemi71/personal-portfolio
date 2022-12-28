const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#0A2647",
      secondary: "#FFF3DF",
      borders: "#2C74B3",
      grayish: "#888888",
      blueish: "#3B5998",
      reddish: "#FF0000",
      orangish: "#F7AB0A",
      red: colors.red,
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      Poppins: ["Poppins", "Sans-serif"],
      Code: ["Source Code Pro", "Sans-serif"],
    },
    extend: {},
  },

  plugins: [],
};
