/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens :{
      'sm': {'max': '520px'},
      'md': {'max': '767px'},
      'lg': {'max': '1023px'},
      'xl': {'max': '1360px'},
      '2xl': {'max': '1920'},
    },
    extend: {
      colors: {
        'navBlue' : '#567B95',
        'hoverBlue' : '#326891'
      },
      
    },
  },
  plugins: [],
}