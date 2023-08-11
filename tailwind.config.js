/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['League Spartan'],
    },
    extend: {
      fontFamily: {
        planet_kosmos: ['Planet Kosmos'],
        spartan: ['League Spartan'],
      },
    },
  },
  plugins: [],
};
