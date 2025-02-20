/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ringColor: {
        DEFAULT: "rgb(96 165 250)", // blue-400
      },
      ringOffsetWidth: {
        DEFAULT: "2px",
      },
      ringWidth: {
        DEFAULT: "2px",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        focusScale: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        focusScale: "focusScale 200ms ease-out forwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // Plugin to handle focus-visible polyfill
    function ({ addVariant }) {
      addVariant("focus-visible", [
        "&:focus-visible",
        ".js-focus-visible &:focus:not(.focus-visible)",
      ]);
    },
  ],
};
