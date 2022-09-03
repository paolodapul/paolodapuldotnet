const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo_bold: ["Heebo-Bold", "sans-serif"],
        heebo_medium: ["Heebo-Medium", "sans-serif"],
        heebo_regular: ["Heebo-Regular", "sans-serif"],
        heebo_light: ["Heebo-Light", "sans-serif"],
        heebo_extralight: ["Heebo-ExtraLight", "sans-serif"],
        inter_regular: ["Inter-Regular", "sans-serif"],
        inter_light: ["Inter-Light", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
