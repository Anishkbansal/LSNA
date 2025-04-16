/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E7E9EF',
          100: '#C2C9D6',
          200: '#9AA6BC',
          300: '#7283A2',
          400: '#4A6088',
          500: '#233D6E',
          600: '#1C3259',
          700: '#152744',
          800: '#0E1B2F',
          900: '#070E1A',
        },
        gold: {
          50: '#FFF9E5',
          100: '#FFF0B8',
          200: '#FFE68A',
          300: '#FFDC5C',
          400: '#FFD22E',
          500: '#FFC800',
          600: '#CCA000',
          700: '#997800',
          800: '#665000',
          900: '#332800',
        },
      },
    },
  },
  plugins: [],
};