const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter_regular: ['Inter-Regular', 'sans-serif'],
        inter_light: ['Inter-Light', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
