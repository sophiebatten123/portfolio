/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{vue,js,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'medium': {'max': '1280px'},
        'small_medium' : {'max': '1090px'} ,
        'small' : {'max': '983px'},
        'tiny' : {'max' : '800px'}// Add or modify the 'md' breakpoint to be 1200 pixels
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
