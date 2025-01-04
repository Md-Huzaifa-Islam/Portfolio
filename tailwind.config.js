import daisyui from "daisyui";
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
      colors: {
        textColor: ["#DDF2FD"],
        mainTheme: ["#164863"],
        btnColor: ["#427D9D"],
        huzaifa: ["#9BBEC8"],
      },
    },
  },
  plugins: [daisyui],
};
