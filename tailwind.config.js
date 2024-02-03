/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        neuton: ['Neuton-Regular'],
        'neuton-bold': ['Neuton-Bold'],
        'neuton-extrabold': ['Neuton-Extrabold'],
        'neuton-extralight': ['Neuton-Extralight'],
        'neuton-italic': ['Neuton-Italic'],
        'neuton-light': ['Neuton-Light'],
      },
    },
  },
  plugins: [],
};
