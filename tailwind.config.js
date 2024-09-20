/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{html,js}'],
  theme: {
     fontFamily: {
        optima: ['Optima', 'sans-serif'],
      },
      extend: {
        colors: {
          'soft-jet' : '#1C1C1B'
        },
        screens: {
          'xs': '360px'
        }
      }      
  },
  plugins: [],
}