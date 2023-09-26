/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        'pointer' : 'url("./assets/cursor/link.cur"), pointer',
      },
      keyframes: {
        animate: {
          "18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%": {
            color: "#fff",
            textShadow:
              "0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4, 0 0 80px #03bcf4, 0 0 160px #03bcf4",
          },
          "5% 95%": {
            color: "#0e3742",
            textShadow: "none",
          },
        },
        arrowLoad: {
          "0%": {
            opacity: 0,
            transform: "rotate(45deg) translate(-60px, -60px)",
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "rotate(45deg) translate(60px, 60px)",
          },
        },
      },
      animation: {
        shrink: "animate 5s linear infinite",
        float: "arrowLoad 2s infinite",
      },
    },
  },
  plugins: [],
};
