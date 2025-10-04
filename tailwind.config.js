/** @type {import('tailwindcss').Config} */
import { theme } from './src/design-system/theme';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
    "./.storybook/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: theme.colors,
    },
  },
  plugins: [],
}
