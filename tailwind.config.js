/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshit:["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serifs"],
      }
    },
  },
  plugins: [],
}