/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
