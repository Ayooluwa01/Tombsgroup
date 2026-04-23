import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        nunitoSans: ["Nunito Sans", "sans-serif"],
      },
     colors: {  
        primary: "#571244",
        secondary: "#EF4353",
        white: "#FFFFFF",
      },
    textColor: {
        Main: "#151515",
      }
      ,
      fontSize: {
        hero: ["56px", { lineHeight: "130%" }],
        h2: ["40px", { lineHeight: "150%" }],
        subheading: ["20px", { lineHeight: "150%" }],
        subtitle: ["18px", { lineHeight: "150%" }],
        body: ["16px", { lineHeight: "150%" }],
        secondary: ["14px", { lineHeight: "150%" }],
      },
Button:{

    },
      letterSpacing: {
        normal: "0em",
        wide: "0.03em",
      },
    },
  },

  plugins: [],
};

export default config;