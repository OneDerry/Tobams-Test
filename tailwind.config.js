/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      backgroundImage: {
        customGradient: "linear-gradient(to right, #4745D0, #2A2769)",
      },
      colors: {
        ashTextColor: "#7780A1",
        bgcolor: "#060714",
        primary: "#060714",
        secondary: "#1E293B",
        border: "#262840",
      },
    },
  },
  plugins: [],
};
