/** @type {import('tailwindcss').Config} */
export const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: "#eef1f2",
          100: "#d5dcdf",
          200: "#aebcc1",
          300: "#7f97a0",
          400: "#4f717d",
          500: "#33505b",
          600: "#264653", // base — Charcoal Blue
          700: "#1e3641",
          800: "#16262e",
          900: "#0d161a",
        },
        verdigris: {
          50: "#e9f6f4",
          100: "#c7e9e3",
          200: "#94d3c6",
          300: "#5ebcaa",
          400: "#38ab96",
          500: "#2a9d8f", // base — Verdigris
          600: "#227e73",
          700: "#1a5f57",
          800: "#12403b",
          900: "#0a221f",
        },
        tuscan: {
          50: "#fdf7ea",
          100: "#faecc7",
          200: "#f5da95",
          300: "#efc768",
          400: "#ecb84a",
          500: "#e9c46a", // base — Tuscan Sun
          600: "#d9a625",
          700: "#a87e1c",
          800: "#775714",
          900: "#46330c",
        },
        sandy: {
          50: "#fdf1e9",
          100: "#fbdcc4",
          200: "#f6bc8e",
          300: "#f79b60",
          400: "#f58939",
          500: "#f4a261", // base — Sandy Brown
          600: "#e2812f",
          700: "#b16321",
          800: "#804718",
          900: "#4f2b0e",
        },
        peach: {
          50: "#fdeee9",
          100: "#fbd4c7",
          200: "#f4a992",
          300: "#ee7f5e",
          400: "#eb6f4a",
          500: "#e76f51", // base — Burnt Peach
          600: "#d24d2a",
          700: "#a13a20",
          800: "#702816",
          900: "#3f160c",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
