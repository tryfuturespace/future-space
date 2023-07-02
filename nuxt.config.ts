// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "FutureSpace | Redefining your real estate journey",
      meta: [
        { name: "description", content: "Redefining your real estate journey" },
        {
          name: "og:title",
          content: "FutureSpace |  Redefining your real estate journey",
        },
        { name: "og:description", content: "Redefining your real estate journey" },
        { name: "keywords", content: "Real estate, housing, rent, apartments, rooms, suites, house, 1 bedroom, beedrooms, flat, duplex" },
        { name: "og:image", content: "https://futurespace.vercel.com/img/logo.png" },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css' },
      ],
      script: [{ src: 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js' }],
    }
  },
  css: [
    '~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@photo-sphere-viewer/core/index.css'
  ],
  build: { transpile: ['@fortawesome/vue-fontawesome'], },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})