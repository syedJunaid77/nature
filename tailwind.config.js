/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./../src/img/1-home.jpg')",
        "hero-pattern2": "url('./../src/img/7-home.jpg')",
      },
    },
  },
  plugins: [],
};
