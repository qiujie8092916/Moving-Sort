import Vue from 'vue'
import VueRouter from 'vue-router'
import nav from '@/utils/sort'
Vue.use(VueRouter)

function authToRoutes (nav) {
  return [{
    path: '',
    redirect: `/${nav[0]}`
  }].concat(
    nav.map((prop) => {
      return {
        name: prop,
        index: prop,
        path: `/${prop}`,
        meta: {
          keepAlive: true
        },
        component: resolve =>
          require([`@/components/${prop}`], resolve)
      }
    })
  )
}

export default new VueRouter({
  routes: authToRoutes(nav),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
