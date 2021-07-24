import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_286017f1 from 'nuxt_plugin_plugin_286017f1' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_image_72962a8f from 'nuxt_plugin_image_72962a8f' // Source: .\\image.js (mode: 'all')
import nuxt_plugin_vuescrollto_13f5ac16 from 'nuxt_plugin_vuescrollto_13f5ac16' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_axios_f0e1a4d8 from 'nuxt_plugin_axios_f0e1a4d8' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_googleanalytics_799da612 from 'nuxt_plugin_googleanalytics_799da612' // Source: .\\google-analytics.js (mode: 'client')
import nuxt_plugin_utils_1ea7651c from 'nuxt_plugin_utils_1ea7651c' // Source: ..\\plugins\\utils.js (mode: 'all')
import nuxt_plugin_moka_30510049 from 'nuxt_plugin_moka_30510049' // Source: ..\\plugins\\moka.js (mode: 'all')
import nuxt_plugin_feathers_34ef02de from 'nuxt_plugin_feathers_34ef02de' // Source: ..\\plugins\\feathers.js (mode: 'all')
import nuxt_plugin_animations_64266e72 from 'nuxt_plugin_animations_64266e72' // Source: ..\\plugins\\animations.js (mode: 'client')
import nuxt_plugin_gsap_0d8e3474 from 'nuxt_plugin_gsap_0d8e3474' // Source: ..\\plugins\\gsap.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"whoobe-store","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"whoobe","name":"whoobe static site generator","content":"NuxtJS\u002FVueJS\u002FFeathersjs\u002FTailwindCSS\u002F Full Static Site Generator"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Asap+Condensed|Barlow+Condensed|Abel|Alice|Alegreya|Amethysta|Archivo+Black|Montserrat|Nunito+Sans|Roboto|Quattrocento|Raleway|Lora|PT+Sans|Alfa+Slab+One"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_286017f1 === 'function') {
    await nuxt_plugin_plugin_286017f1(app.context, inject)
  }

  if (typeof nuxt_plugin_image_72962a8f === 'function') {
    await nuxt_plugin_image_72962a8f(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_13f5ac16 === 'function') {
    await nuxt_plugin_vuescrollto_13f5ac16(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_f0e1a4d8 === 'function') {
    await nuxt_plugin_axios_f0e1a4d8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_799da612 === 'function') {
    await nuxt_plugin_googleanalytics_799da612(app.context, inject)
  }

  if (typeof nuxt_plugin_utils_1ea7651c === 'function') {
    await nuxt_plugin_utils_1ea7651c(app.context, inject)
  }

  if (typeof nuxt_plugin_moka_30510049 === 'function') {
    await nuxt_plugin_moka_30510049(app.context, inject)
  }

  if (typeof nuxt_plugin_feathers_34ef02de === 'function') {
    await nuxt_plugin_feathers_34ef02de(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_animations_64266e72 === 'function') {
    await nuxt_plugin_animations_64266e72(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_gsap_0d8e3474 === 'function') {
    await nuxt_plugin_gsap_0d8e3474(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    const { route } = router.resolve(app.context.route.fullPath)
    // Ignore 404s rather than blindly replacing URL
    if (!route.matched.length && process.client) {
      return resolve()
    }
    router.replace(route, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
