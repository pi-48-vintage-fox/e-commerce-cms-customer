import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/Product.vue'
import ProductPublic from '../views/ProductPublic.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Product',
    component: Product
  },
  {
    path: '/productPublic',
    name: 'ProductPublic',
    component: ProductPublic
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && localStorage.access_token) {
    next({ path: '/' })
  } else if (!localStorage.access_token) {
    if (to.name !== 'login' && to.name !== 'register') {
      console.log('masuk sini ok')
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
