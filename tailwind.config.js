/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      colors: {
        earth: {
          950: "#0a120f",
          900: "#0f1a16",
          800: "#1a2e28",
          700: "#234539",
          500: "#3d8b7a",
          400: "#5cb8a3",
          300: "#8ed4c4",
        },
        amber: {
          glow: "#e8a838",
        },
      },
    },
  },
  plugins: [],
};
