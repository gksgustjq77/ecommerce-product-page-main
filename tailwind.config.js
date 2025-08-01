/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(26, 100%, 55%)",
          pale: "hsl(25, 100%, 94%)",
        },
        neutral: {
          "very-dark-blue": "hsl(220, 13%, 13%)",
          "dark-grayish-blue": "hsl(219, 9%, 45%)",
          "grayish-blue": "hsl(220, 14%, 75%)",
          "light-grayish-blue": "hsl(223, 64%, 98%)",
          white: "hsl(0, 0%, 100%)",
          black: "hsla(0, 0%, 0%, 0.75)",
        },
      },
    },
  },
  screens: {
    xs: "480px",
    md: "768px",
    lg: "1200px",
  },
  plugins: [],
};
