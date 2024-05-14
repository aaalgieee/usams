/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'uic': {
        50: '#fef2f2',
        100: '#fde6e7',
        200: '#fad1d3',
        300: '#f5acb0',
        400: '#ef7d86',
        500: '#e44f5f',
        600: '#d2334c',
        700: '#af213b',
        800: '#931e37',
        900: '#7e1d35',
        950: '#460b18',
      },
      slate: {
        50: '#f8f9fa',
        100: '#f1f3f5',
        200: '#e9ecef',
        300: '#dee2e6',
      },
      red : {
        50: '#fff5f5',
        100: '#ffe3e3',
        200: '#ffc9c9',
        300: '#ffa8a8',
        400: '#ff8787',
        500: '#ff6b6b',
        600: '#fa5252',
        700: '#f03e3e',
        800: '#e03131',
        900: '#c92a2a',
      },
      green : {
        50: '#f0fff4',
        100: '#dcffe4',
        200: '#bef5cb',
        300: '#85e89d',
        400: '#34d058',
        500: '#28a745',
        600: '#22863a',
        700: '#176f2c',
        800: '#165c26',
        900: '#144620',
      },
      blue : {
        50: '#ebf5ff',
        100: '#e1effe',
        200: '#c3ddfd',
        300: '#a4cafe',
        400: '#76a9fa',
        500: '#3f83f8',
        600: '#1c64f2',
        700: '#1a56db',
        800: '#1e429f',
        900: '#233876',
      },
      yellow : {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      
      },
    },
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes:[
      "light"
    ]
  },
};
