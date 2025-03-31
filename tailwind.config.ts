import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customTurquoise: "#23ceb4",
      },
    },
  },
  plugins: [],
};

export default config;
