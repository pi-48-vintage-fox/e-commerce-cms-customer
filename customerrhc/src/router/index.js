import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
// karena login dan register ada di home, jadi perlu kondisi lainnya untuk di protect
  
  if (to.path !== '/login' && !localStorage.access_token)next({ name: 'Login' })
  else if (to.path === '/login' && localStorage.access_token)next({ name: 'Home' })
  else next()
})

export default router
