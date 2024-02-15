/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"',  ...defaultTheme.fontFamily.sans]
      },
      colors: {
        main: "#300390",
        sub: "#673DE6",
        pink: "#FF35F7",
        other_pink: "#DF15D7",
        main_text:"#303030",
        border: "#C913CD"
        // btn_linear: 'linear-gradient(273.32deg, #FF35F7 -1.51%, #673DE6 113.89%)'
      },
      backgroundImage: {
        'btn-linear': "linear-gradient(273.32deg, #FF35F7 -1.51%, #673DE6 113.89%)",
      },
    },
  },
  plugins: [],
}

