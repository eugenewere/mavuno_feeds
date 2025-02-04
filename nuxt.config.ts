// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/tailwind.css'],
  modules: ['@nuxt/icon'],
  icon: {
    serverBundle: {
      collections: ['ph',] // <!--- this
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
