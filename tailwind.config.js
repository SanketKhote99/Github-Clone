const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        ghDark:'#1A202C',
        ghGreen:'#2C974B',
        ghLightDark:'#4A5568',
        ghBlue:'#2b6cb0',
        green1:'#2F855A',
        green2:'#38A169',
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
