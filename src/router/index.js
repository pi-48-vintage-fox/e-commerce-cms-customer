import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Carts from '../views/Carts.vue'
import History from '../views/History.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/carts',
    name: 'Carts',
    component: Carts
  },
  {
    path: '/history',
    name: 'History',
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.name !== 'Login' && to.name !== 'Register' && to.name !== 'Home') && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if ((to.name === 'Login' || to.name === 'Register') && localStorage.access_token) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
