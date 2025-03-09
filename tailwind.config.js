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
        glow: {
          "0%": {
            textShadow:
              "0 0 5px #ff005e, 0 0 10px #ff005e, 0 0 20px #ff005e, 0 0 40px #ff005e, 0 0 80px #ff005e",
          },
          "100%": {
            textShadow:
              "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 80px #00d4ff, 0 0 160px #00d4ff",
          },
        },
        flicker: {
          "0%": {
            opacity: "0.9",
          },
          "25%": {
            opacity: "0.8",
          },
          "50%": {
            opacity: "1",
          },
          "75%": {
            opacity: "0.8",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        fadeSlide: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeScale: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        focusScale: "focusScale 200ms ease-out forwards",
        glow: "glow 1.5s infinite alternate",
        flicker: "flicker 1.5s infinite alternate",
        fadeIn: "fadeIn 0.5s ease-out",
        shimmer: "shimmer 2s infinite",
        fadeSlide: "fadeSlide 0.6s ease-out forwards",
        fadeScale: "fadeScale 0.6s ease-out forwards",
      },
      typography: {
        custome: {
          css: {
            maxWidth: "100%",
          },
        },
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
