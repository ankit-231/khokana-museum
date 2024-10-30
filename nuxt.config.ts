// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  app: {
    head: {
      title: "Khokana Museum",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Website for Khokana Museum",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:3000",
    },
  },
  components: {
    // global: true,
    dirs: [{ path: "~/components", pathPrefix: false }],
  },
});