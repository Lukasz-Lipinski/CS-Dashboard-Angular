/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffee32",
        "primary-hover": "#fcf6bd",
        "primary-dark": "#fec601",
        secondary: "#333533",
        theme: "#edf2f4",
        "accept-primary": "#a1ff0a",
        "accept-hover": "#deff0a",
        "danger-primary": "#ff0000",
        "danger-hover": "#ff686b",
        "danger-clicked": "#f22b29",
      },
    },
  },
  plugins: [],
};
