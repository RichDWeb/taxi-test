/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-yellow': '#ffb400',
        'main-dark': '#1B1B1B'
      },
      fontFamily: {
        interBlack: ["Inter-Black", "sans-serif"],
        interBold: ["Inter-Bold", "sans-serif"],
        interExtraBold: ["Inter-ExtraBold", "sans-serif"],
        interExtraLight: ["Inter-ExtraLight", "sans-serif"],
        interLight: ["Inter-Light", "sans-serif"],
        interMedium: ["Inter-Medium", "sans-serif"],
        interRegular: ["Inter-Regular", "sans-serif"],
        interSemiBold: ["Inter-SemiBold", "sans-serif"],
        interThin: ["Inter-Thin", "sans-serif"],
        montserratLight: ["Montserrat-Light", "sans-serif"],
        montserratSemiBold: ["Montserrat-SemiBold", "sans-serif"],
        radioCanadaBold: ["RadioCanada-Bold", "sans-serif"],
        radioCanadaLight: ["RadioCanada-Light", "sans-serif"],
        radioCanadaMedium: ["RadioCanada-Medium", "sans-serif"],
        radioCanadaRegular: ["RadioCanada-Regular", "sans-serif"],
        radioCanadaSemiBold: ["RadioCanada-SemiBold", "sans-serif"],
      }
    },
  },
  plugins: [],
}
