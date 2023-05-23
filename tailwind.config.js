/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "678px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",


      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      colors: {
        bodyColor: "#071013",
        textBlue: "#BBD1EA",
        textLight: "#DAE3E5", 
        textDark: "#507DBC",
        hoverColor: "#A1C6EA",
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}

