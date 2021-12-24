import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _778a38d2 = () => interopDefault(import('..\\pages\\İlginiziCekebilecekler.vue' /* webpackChunkName: "pages/İlginiziCekebilecekler" */))
const _6fc12a54 = () => interopDefault(import('..\\pages\\Girisyapp.vue' /* webpackChunkName: "pages/Girisyapp" */))
const _5c8318cc = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _77764586 = () => interopDefault(import('..\\pages\\MainPage.vue' /* webpackChunkName: "pages/MainPage" */))
const _b99ea742 = () => interopDefault(import('..\\pages\\Sepet.vue' /* webpackChunkName: "pages/Sepet" */))
const _4aaa2927 = () => interopDefault(import('..\\pages\\Urundetay.vue' /* webpackChunkName: "pages/Urundetay" */))
const _97e78ba0 = () => interopDefault(import('..\\pages\\Uyeol.vue' /* webpackChunkName: "pages/Uyeol" */))
const _e52b3d78 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/%C4%B0lginiziCekebilecekler",
    component: _778a38d2,
    name: "İlginiziCekebilecekler"
  }, {
    path: "/Girisyapp",
    component: _6fc12a54,
    name: "Girisyapp"
  }, {
    path: "/inspire",
    component: _5c8318cc,
    name: "inspire"
  }, {
    path: "/MainPage",
    component: _77764586,
    name: "MainPage"
  }, {
    path: "/Sepet",
    component: _b99ea742,
    name: "Sepet"
  }, {
    path: "/Urundetay",
    component: _4aaa2927,
    name: "Urundetay"
  }, {
    path: "/Uyeol",
    component: _97e78ba0,
    name: "Uyeol"
  }, {
    path: "/",
    component: _e52b3d78,
    name: "index"
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
