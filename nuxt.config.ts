export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/gameon/',
    head: {
      title: 'GameOn!',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "GameOn!"
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    }
  },
  colorMode: {
    preference: 'light'
  },
  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: "2024-11-27"
})