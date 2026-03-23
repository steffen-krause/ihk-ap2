export default defineNuxtConfig({
  compatibilityDate: '2025-03-23',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'IHK AP2 Trainer',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap',
        },
      ],
    },
  },
  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL || 'postgres://ihk:ihk@localhost:5433/ihk_ap2',
  },
})
