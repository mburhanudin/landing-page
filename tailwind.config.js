module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          1: "var(--color-bg-dark-1)",
          2: "var(--color-bg-dark-2)",
          3: "var(--color-bg-dark-3)"
        },
        white: "var(--color-text-white)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
