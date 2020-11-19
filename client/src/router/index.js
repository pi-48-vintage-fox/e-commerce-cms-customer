import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Content from '../components/Content.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Content',
        component: Content
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/formupdate',
    name: 'FormUpdate',
    component: () => import('../components/FormUpdate.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../components/Cart.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token')
  if (to.name === 'Login' && token) next({name: 'Home'})
  else next()
})

export default router
