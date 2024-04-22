module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: {
          300: "#e4e4e9",
          600: "#737373",
          900: "#181433",
          "400_33": "#c4c4c433",
          "600_01": "#7d7d7d",
          "900_7f": "#1814337f",
          "900_33": "#18143333",
          "100_99": "#f3f3f399",
        },
        red: { 50: "#ffefeb", 400: "#df6951" },
        blue_gray: { 500: "#757095", 900: "#181e4b", "900_01": "#2e2e2e", "100_01": "#d0d0d0" },
        black: { 900: "#000000", "900_19": "#00000019" },
        blue: { 300: "#6499e9", "300_e8": "#6499e9e8" },
        deep_purple: { 50: "#eeeeff" },
        amber: { 500: "#ffba09" },
        light_blue_100: "#9eddff",
      },
      boxShadow: {
        xs: "0px 4px 4px 0px #0000003f",
        sm: "0px 20px 35px 0px #df695126",
        md: "0px 15.28px 26px 0px #df695126",
        lg: "0px 20px 35px 0px #73737326",
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, #6499e9,#6499e9)",
        gradient1:
          "linear-gradient(135deg, #6499e9,#6499e9,#e3bc85,#e1b882,#e1b782,#dfb37f,#ddae7b,#daa575,#d9a172,#6499e9)",
      },
      fontFamily: { poppins: "Poppins", volkhov: "Volkhov", manrope: "Manrope", inter: "Inter" },
      opacity: { 0.07: 0.07 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
