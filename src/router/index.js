import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// To silence NavigationDuplicated error
function patchRouterMethod(router, methodName) {
  router['old' + methodName] = router[methodName]
  router[methodName] = async function(location) {
    return router['old' + methodName](location).catch(error => {
      if (error.name === 'NavigationDuplicated') {
        return this.currentRoute
      }
      throw error
    })
  }
}

patchRouterMethod(router, 'push')
patchRouterMethod(router, 'replace')

router.beforeEach((to, from, next) => {
  if (to.path === '/cart' && !localStorage.getItem('access_token'))
    next('/login')
  else if (to.path === '/login' && localStorage.getItem('access_token'))
    next(false)
  else next()
})

export default router
