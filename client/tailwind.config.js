/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-green": "#00d09c",
        "dark-green": "#00382c", // Custom neon green color
      },
      fontFamily: {
        didot: ['"GFS Didot"', "serif"], // Ensure the font family name matches Google Fonts
      },
    },
  },
  plugins: [],
};
