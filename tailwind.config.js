/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "100%" },
          "100%": { backgroundPosition: "-100%" },
        },
        moveGradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
        moveGradient: "moveGradient 3s linear infinite",
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
};
