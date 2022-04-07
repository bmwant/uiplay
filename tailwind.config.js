const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}", "./*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
