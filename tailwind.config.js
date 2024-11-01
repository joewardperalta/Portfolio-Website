/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005EFC",
        black: "#272727",
        gray: "#828282",
        "gray-light": "#EEEEEE",
        white: "#FEFEFE",
      },
      screens: {
        desktop: "1440px",
        laptop: "1280px",
        tablet: "834px",
      },
      backgroundImage: {
        hero: "url('/img/wallpaper mockup.jpg')",
      },
    },
  },
  plugins: [],
};
