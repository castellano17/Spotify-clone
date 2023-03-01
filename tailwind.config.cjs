/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bgsp-base": "#1ed760",
        "bgsp-light": "#1fdf64",
        "bgsp-press": "#169c46",
        "bgblack-base": "#121212",
      },
    },
  },
  plugins: [],
};
