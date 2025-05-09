// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        green: '#DDD101',
        black: '#111',
        nero: '#242B2E',
      },
      transitionProperty: {
        'width': 'width',
      },
    },
  },
  plugins: [],
}