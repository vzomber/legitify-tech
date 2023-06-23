/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A6EBD',
        dark: '#095C9E',
        light: '#C6D8E5',
        white: '#FFFFFF',
        snow: '#FAFAFA',
        black: '#000000',
        ash: '#2D2D2D',
        gray: '#545555',
      },
    },
  },
  plugins: [],
};
