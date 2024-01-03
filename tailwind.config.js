/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      colors: {
        primary: '#084D8E',
        secondary: '#286197',
        third: '#2289D8',
        fourth: '#FFB924',
  
        darkGray: '#191A1B',
        mediumGray: '#292D32',
        neutralGray: '#666666',
        lightGray: '#D2D2D2',
        clearGray:'#F0F0F0',
      },
      height:{
        '100': '26rem',
        '120': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

