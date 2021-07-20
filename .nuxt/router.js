import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d6c6b57a = () => interopDefault(import('..\\pages\\store\\index.vue' /* webpackChunkName: "pages/store/index" */))
const _9d404f36 = () => interopDefault(import('..\\pages\\store\\category\\_slug\\index.vue' /* webpackChunkName: "pages/store/category/_slug/index" */))
const _6a4674a8 = () => interopDefault(import('..\\pages\\store\\product\\_slug\\index.vue' /* webpackChunkName: "pages/store/product/_slug/index" */))
const _506dd3a6 = () => interopDefault(import('..\\pages\\store\\category\\_slug\\_facet\\index.vue' /* webpackChunkName: "pages/store/category/_slug/_facet/index" */))
const _2f58a378 = () => interopDefault(import('..\\pages\\category\\_slug\\index.vue' /* webpackChunkName: "pages/category/_slug/index" */))
const _d8d53460 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _5ea2320c = () => interopDefault(import('..\\pages\\_slug\\index.vue' /* webpackChunkName: "pages/_slug/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/store",
    component: _d6c6b57a,
    name: "store"
  }, {
    path: "/store/category/:slug",
    component: _9d404f36,
    name: "store-category-slug"
  }, {
    path: "/store/product/:slug",
    component: _6a4674a8,
    name: "store-product-slug"
  }, {
    path: "/store/category/:slug?/:facet",
    component: _506dd3a6,
    name: "store-category-slug-facet"
  }, {
    path: "/category/:slug",
    component: _2f58a378,
    name: "category-slug"
  }, {
    path: "/",
    component: _d8d53460,
    name: "index"
  }, {
    path: "/:slug",
    component: _5ea2320c,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
