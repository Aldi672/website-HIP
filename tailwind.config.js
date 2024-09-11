/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      keyframes: {
        floating: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        floating: 'floating 2s ease-in-out infinite',
      },

      fontFamily: {
        roboto: ["roboto-regular"],
        anton: ["anton-reguler"],
        oswald: ["oswald"],
        signika: ["signika"],
        newamsterdam: ["newamsterdam"],

      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

