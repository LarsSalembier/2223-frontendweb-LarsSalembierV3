import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {},
        dark: {
          colors: {
            background: {
              50: '#f2f7e9',
              100: '#dae5cd',
              200: '#c2d3ad',
              300: '#a9c18c',
              400: '#91b06d',
              500: '#789653',
              600: '#5c7640',
              700: '#42542e',
              800: '#27321a',
              900: '#0b1204',
              foreground: '#fff',
              DEFAULT: '#42542e',
            },
          },
        },
      },
    }),
  ],
};
