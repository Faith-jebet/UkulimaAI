/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Lora", "Georgia", "Times New Roman", "serif"],
      },
      colors: {
        kilimo: {
          bg:      "#1a2e1a",
          card:    "#243824",
          border:  "#2d4a2d",
          input:   "#3a5a3a",
          green:   "#4a9c4a",
          gold:    "#e8c547",
          muted:   "#6a8a6a",
          text:    "#e8f0e8",
          placeholder: "#4a6a4a",
        },
      },
    },
  },
  plugins: [],
};
