// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthq/ui", "nuxt-headlessui", "@nuxtjs/tailwindcss"],
  devtools: { enabled: false },
  typescript: {
    shim: false,
  },
  ui: {
    global: true,
  },
  // theme: "light"
  //   colors: {
  //     primary: "#ff0000",
  //     main: "#3D5B89",
  //   },
  // ui: {
  //   primary: "green",
  //   main: "#3D5B89",
  // },
});
