export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'huquq_client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/scss/style.scss',
    '@/assets/css/swiper.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/vue-slick-carousel.js" },
    { src: "~/plugins/vue-swiper.js", ssr: false },
  ],
  // plugins: [{ src: './plugins/vue-slick-carousel.js' }],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-i18n",
    '@nuxtjs/axios',

  ],
  i18n: {
    locales: [
      {
        code: "uz",
        file: "uz.js"
      },
      {
        code: "ru",
        file: "ru.js"
      }
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "uz"
  },
  
  axios: {
    baseURL: "http://ass.tujjor.org/api/"
    // baseURL: "http://localhost:3301/api"
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-slick"]
  }
}
