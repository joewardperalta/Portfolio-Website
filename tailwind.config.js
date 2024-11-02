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
      fontSize: {
        "5xl": ["3rem", "1.2"],
        "4xl": ["2.25rem", "1.2"],
        "3xl": ["1.875rem", "1.2"],
        "2xl": ["1.5rem", "1.7"],
        xl: ["1.25rem", "1.7"],
        lg: ["1.125rem", "1.7"],
        base: ["1rem", "1.7"],
      },
    },
  },
  plugins: [],
};
