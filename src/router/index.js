import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/landing',
    name: 'Landing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Landing.vue')
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/wishlist',
        name: 'Wishlist',
        component: () => import('../components/Wishlist.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../components/Cart.vue')
      },
      {
        path: '/history',
        name: 'History',
        component: () => import('../components/History.vue')
      },
      {
        path: '/:category',
        name: 'CertainProducts',
        component: () => import('../components/CertainProducts.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
