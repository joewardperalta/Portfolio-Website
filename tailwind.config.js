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
      fontSize: {
        "title-sm": ["2.375rem", "1.2"],
        "title-lg": ["3.5rem", "1.2"],
        "subheading-sm": ["1rem", "1.5"],
        "subheading-base": ["1.25rem", "1.5"],
      },
      padding: {
        "navbar-py": "2.125rem",
      },
    },
  },
  plugins: [],
};
