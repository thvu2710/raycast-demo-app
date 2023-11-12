/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "white-normal": "#fff",
      "light-white-normal": "rgba(255, 255, 255, 0.80)",
      "light-white": "rgba(255, 255, 255, 0.90)",
      "gray-normal": "rgba(255, 255, 255, 0.60)",
      "light-gray": "rgba(255, 255, 255, 0.15)",
      "gray-dark": "rgba(255, 255, 255, 0.40)",
      "light-dark": "rgba(255, 255, 255, 0.10)",
      "light-dark1": "rgba(255, 255, 255, 0.12)",
      "blue-normal": "#2BAFFF",
      "green-normal": "#59D499",
      "dark-red": "rgba(255, 99, 99, 0.15)",
    },
    fontSize: {
      "font-normal": "13px",
    },
    extend: {},
  },
  plugins: [],
};
