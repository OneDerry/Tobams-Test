/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      // => @media (min-width: 480px) { ... }

      md: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
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

