// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthq/ui", "nuxt-headlessui", "@nuxtjs/tailwindcss"],
  devtools: { enabled: false },
  typescript: {
    shim: false,
  },
});
