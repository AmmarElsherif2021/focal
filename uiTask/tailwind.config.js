/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "animate-txt": {
          "0%": {
            transform: "translateY(20px)",
            opacity: 0,
          },
          "25%": {
            transform: "translateY(18px)",
            opacity: 1,
          },
          "50%": {
            transform: "translateY(9px)",
            opacity: 1,
          },
          "99%": {
            transform: "translateY(3px)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(5px)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
  },
};
