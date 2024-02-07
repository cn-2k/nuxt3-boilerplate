// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    typescriptBundlerResolution: false,
  },
  app: {
    head: {
      title: "Welcome to Nuxt",
      meta: [{ name: "description", content: "My awesome Nuxt project" }],
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
  ],

  eslint: { lintOnStart: false },
  googleFonts: {
    families: {
      Inter: [100, 300, 400, 500, 600, 700],
    },
  },
});
