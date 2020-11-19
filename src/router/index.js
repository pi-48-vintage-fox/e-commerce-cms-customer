import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ShowCart from '../views/ShowCart.vue'

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
    component: Login,
    beforeEnter (to, from, next) {
      const token = localStorage.getItem('access_token')
      if (token) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter (to, from, next) {
      const token = localStorage.getItem('access_token')
      if (token) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/carts',
    name: 'ShowCart',
    component: ShowCart,
    beforeEnter (to, from, next) {
      const token = localStorage.getItem('access_token')
      if (token) {
        next()
      } else {
        next('/login')
      }
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("access_token")
//   if (token && to.path === '/login'){
//     next({
//       name: 'Home'
//     })
//   } else if (!token && to.path === '/'){
//     next({
//       name: 'Login'
//     })
//   }
// })

export default router
