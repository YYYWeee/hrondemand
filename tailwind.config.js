/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["Inter var", ...defaultTheme.fontFamily.sans],
         },
         animation: {
            "infinite-scroll": "infinite-scroll 25s linear infinite",
         },
         keyframes: {
            "infinite-scroll": {
               from: { transform: "translateX(0)" },
               to: { transform: "translateX(-100%)" },
            },
         },
      },
   },
   plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
   ],
};
