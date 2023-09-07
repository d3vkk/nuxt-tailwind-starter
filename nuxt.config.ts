// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // modules: ["@nuxt/postcss8"],
  modules: ["@pinia/nuxt", "@nuxtjs/robots"],
  css: ["@/assets/css/index.css"],
  components: ["~/views/landing", "~/views", "~/components"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  robots: {
    UserAgent: "*",
    Disallow: "",
  },
});
