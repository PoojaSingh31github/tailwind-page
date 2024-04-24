import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#387FA3",
        primary2: "#E0786C",
        secondary: "#4EACB7",
        Accent1: "#FDFCDF",
        text1: "#FFFFFF",
        text2: "#393939",
        Accent2: "#ADADAD",
      },
    },
  },
  plugins: [],
};
export default config;
