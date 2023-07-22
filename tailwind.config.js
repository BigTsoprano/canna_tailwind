module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./comps/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
   extend: {},
  },
  variants: {
   extend: {},
  },
  content: [
    'node_modules/preline/dist/*.js',
],
  plugins: [require('preline/plugin')],
  };
  