/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '-2px 0px 14px 16px rgba(0,0,0,0.75);',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}