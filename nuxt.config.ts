// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["/node_modules/aos/dist/aos.css", "/css/main.css"],
  modules: ["nuxt-icon"],
  plugins: ["~/plugins/aos.ts"],
  typescript: {
    typeCheck: true,
    strict: true,
  },
});
