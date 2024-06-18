import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "tituloNav": "Roboto Slab, serif",
        "textNormal": "Anek Tamil, sans-serif"
      },
        colors: {
          celesteClaro: '#83cacd', 
          rosaClaro: '#f0c5a5',
          beige: '#ecdcab',
          rosa1: '#ffbfc5',
          rosa2: '#3b8db5',
          lila: '#ac7cf5',
          violeta: '#511f52'
        },
    },
  },
  plugins: [],
};
export default config;
