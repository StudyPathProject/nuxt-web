// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthq/ui", "nuxt-headlessui", "@nuxtjs/tailwindcss"],
  devtools: { enabled: false },
  typescript: {
    shim: false,
  },
  app: {
    head: {
      title: "StudyPath Online",
      meta: [{ name: "description", content: "Una nueva forma de aprender." }],
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      //   },
      // ],
    },
  },
  ui: {
    global: true,
  },
  // runtimeConfig: {
  //   currencyKey: process.env.CURRENCY_API_KEY,
  // },
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
