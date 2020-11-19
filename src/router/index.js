import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Products.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('access_token')
  if (to.name === 'Cart' && !accessToken) next({ name: 'Home' })
  else if (to.name === 'Cart' && accessToken) next(true)
  else if (to.name === 'Login' && accessToken) next({ name: 'Home' })
  else if (to.name === 'Register' && accessToken) next({ name: 'Home' })
  else next()
})

export default router
