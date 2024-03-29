/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};
