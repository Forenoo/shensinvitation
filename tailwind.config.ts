/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "3xl": "1680px",
      },
      colors: {
        blurple: "#006BFF",
        primary: "#0C273B",
        secondary: "#0A2131",
        black: "#171717",
        gray: "#6F6F6F",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
};
