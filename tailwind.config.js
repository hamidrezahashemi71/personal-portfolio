const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#011700",
      secondary: "#045900",
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
      slate: colors.slate,
    },
    fontFamily: {
      Poppins: ["Poppins", "Sans-serif"],
    },
    extend: {},
  },

  plugins: [require("tailwind-scrollbar")],
};
