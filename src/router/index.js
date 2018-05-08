import Vue from 'vue'
import VueRouter from 'vue-router'
import nav from '@/utils/nav'
Vue.use(VueRouter)

function authToRoutes (nav) {
  return [{
    path: '',
    redirect: `/${Object.keys(nav[0])[0]}`
  }].concat(
    nav.map((prop) => {
      let key = Object.keys(prop)[0]
      return {
        name: key,
        index: key,
        path: `/${key}`,
        meta: {
          keepAlive: true
        },
        component: resolve => require([`@/components/${key}`], resolve)
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
