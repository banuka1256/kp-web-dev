/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","test.html" ,"index.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro"],
      },
      // fontWeight:{
      //   regular:400,
      //   bold:900
      // },
      colors: {
        BrightRed: "hsl(12, 88%, 59%)",
        DarkBlue: "hsl(228, 39%, 23%)",
        DarkGrayishBlue: "hsl(227, 12%, 61%)",
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: "hsl(13, 100%, 96%)",
        VaryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
