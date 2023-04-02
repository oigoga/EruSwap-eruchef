/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'orchid': '#CC3DC6',
      'violet': '#AA00FF',
      'dark-blue': '#16193B',
      'dark-gray': '#0E0E0E',
      'navy-blue': '#051139',
      'black': '#000000',
      'white': '#FFFFFF',
      'offwhite': '#F5F5F5',
      'text-title': '#333333',
      'text-body': '#666666',
      'text-field': '#B8B8B8',
      'text-disabled': '#EBEBEB',
      'purple': '#781474',
      'cyan': '#5699FF',
      'yellow': '#FFBD0C',
      'red': '#DF4949',
      'green': '#47A432',
      'transparent': 'transparent',
      'gradient': '(216.56deg, #E250E5 5.32%, #4B50E6 94.32%)' 

    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'Bakbak': ['Bakbak One', 'cursive'],
      'Urbanist': ['Urbanist', 'sans-serif'],
      'Inter': ['Inter', 'sans-serif'],
      
    },
    extend: {},
  },
  plugins: [],
}