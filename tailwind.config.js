/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
      },
      height:{
        'screenMargin': 'calc(100vh - 1rem)',
        'formHeight':'430px'
      },
      width:{
        'formWidth':'350px'
      }
    },
  },
  plugins: [],
}

