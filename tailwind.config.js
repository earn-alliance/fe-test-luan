/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#fdd987",
        "custom-gray": "#476072",
      },
      boxShadow: {
        glow: "0 0 20px 5px #fdd987",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwind-scrollbar")],
};
