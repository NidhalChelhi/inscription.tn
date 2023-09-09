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
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        "bg-img1": "url('/assets/univ1.jpg')",
        "bg-img2": "url('/assets/univ2.jpg')",
        "bg-img3": "url('/assets/univ3.jpg')",
        "bg-img4": "url('/assets/univ4.jpg')",
        "bg-img5": "url('/assets/univ5.jpg')",
        "bg-img6": "url('/assets/univ6.jpg')",
        "bg-img7": "url('/assets/univ7.jpg')",
        "bg-img8": "url('/assets/univ8.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
