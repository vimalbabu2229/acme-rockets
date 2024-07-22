/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        /**For wide screens like desktop */
        ws: { raw: "(min-aspect-ratio: 3/2)" },
        /**For tall screens like mobile or tab */
        ts: { raw: "(min-aspect-ratio: 0.5/2)" },
      },

      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },

      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },

      colors: {
        "peanut-butter": {
          DEFAULT: "#ddc09d", 
          dark: "#bf9674", 
          light: "#eeddc3"
        }
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
