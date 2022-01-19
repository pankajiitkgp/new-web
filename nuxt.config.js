import global from './utils/global'
import getSiteMeta from './utils/getSiteMeta'
const meta = getSiteMeta()

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
  router: {
    base: '/new-web/'
  },
  loading: {
    color: '#378208',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: global.siteTitle,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      ...meta,
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: global.siteDesc || ''
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: 'common/favicon.png'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap',
        media: 'print',
        onload: `this.media='all'`
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['bootstrap/scss/bootstrap.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~/plugins/lightgallery.client.js',
  }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-purgecss',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'UA-81265402-1'
  },

  purgeCSS: {
    whitelist: [
      'lg-icon','lg-container','lg-next','lg-prev','disabled','lg-single-item','lg-outer','lg-right-end','lg-object','lg-left-end','lg-toolbar','lg-media-overlap','lg-icon-18','lg-close','lg-maximize','lg-download','lg-sub-html','lg-item','lg-error-msg','lg-counter','lg-closing','lg-from-hash','lg-start-zoom','lg-zoomable','lg-img-wrap','lg-video-cont','lg-complete','lg-group','lg-show','lg-on','lg-pager-outer','lg-hide-sub-html','lg-show-in','lg-hide-items','lg-zoom-from-image','lg-visible','lg-css3','lg-start-end-progress','lg-prev-slide','lg-next-slide','lg-current','lg-dragging','lg-grab','lg-grabbing','lg-content','lg-inner','gif','lg-css','lg-empty-html','lg-hide-download','lg-first-slide','lg-dummy-img','lg-components-open','lg-zoomed','lg-components','lg-backdrop','in','lg-no-trans','lg-use-css3','lg-fade','lg-start-progress','lg-slide','lg-dragging-vertical','lg-inline','lg-actions','lg-prev','lg-icon','lg-next'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    icon: {
      fileName: 'common/favicon.png',
 },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
