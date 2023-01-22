/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}",
    "./Screens/**/*.{jsx,js,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}",
    "./Components/**/*.{jsx,js,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"
  ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
