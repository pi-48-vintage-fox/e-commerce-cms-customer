import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/instance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banners: '',
    categories: '',
    cart: [],
    logged: false,
    history: '',
    products: '',
    wishlist: ''
  },
  mutations: {
    LOGIN (state, boolean) {
      state.logged = boolean
    },
    RETURN_BANNERS (state, payload) {
      state.banners = payload
    },
    RETURN_CATEGORIES (state, payload) {
      state.categories = payload
    },
    RETURN_CART (state, payload) {
      state.cart = payload
    },
    RETURN_HISTORY (state, payload) {
      state.history = payload
    },
    RETURN_PRODUCTS (state, payload) {
      state.products = payload
    },
    RETURN_WISHLIST (state, payload) {
      state.wishlist = payload
    }
  },
  actions: {
    checkout (context) {
      const token = localStorage.getItem('token')
      return axios({
        method: 'PATCH',
        url: '/checkout',
        headers: {
          token
        }
      })
    },
    addToWishlist (context, productId) {
      const token = localStorage.getItem('token')
      axios({
        method: 'POST',
        url: '/wishlist',
        headers: {
          token
        },
        data: {
          product_id: productId
        }
      })
        .then(result => {
          context.dispatch('getProducts')
          context.dispatch('getWishlist')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, productId) {
      const token = localStorage.getItem('token')
      axios({
        method: 'POST',
        url: 'cart',
        headers: {
          token
        },
        data: {
          product_id: productId
        }
      })
        .then(result => {
          context.dispatch('getCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    decrementAmount (context, productId) {
      const token = localStorage.getItem('token')
      return axios({
        method: 'PATCH',
        url: '/cart/' + productId,
        headers: {
          token
        },
        data: {
          how: false
        }
      })
    },
    getBanners (context) {
      axios({
        method: 'GET',
        url: '/banners/cust'
      })
        .then(result => {
          context.commit('RETURN_BANNERS', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCart (context) {
      const token = localStorage.getItem('token')
      axios({
        method: 'GET',
        url: '/cart',
        headers: {
          token
        }
      })
        .then(result => {
          context.commit('RETURN_CART', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCategories (context) {
      axios({
        method: 'GET',
        url: '/categories'
      })
        .then(result => {
          context.commit('RETURN_CATEGORIES', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getHistory (context) {
      const token = localStorage.getItem('token')
      axios({
        method: 'GET',
        url: '/history',
        headers: {
          token
        }
      })
        .then(result => {
          context.commit('RETURN_HISTORY', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProducts (context) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(result => {
          context.commit('RETURN_PRODUCTS', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getWishlist (context) {
      const token = localStorage.getItem('token')
      axios({
        method: 'GET',
        url: '/wishlist',
        headers: {
          token
        }
      })
        .then(result => {
          context.commit('RETURN_WISHLIST', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    incrementAmount (context, productId) {
      const token = localStorage.getItem('token')
      return axios({
        method: 'PATCH',
        url: '/cart/' + productId,
        headers: {
          token
        },
        data: {
          how: true
        }
      })
    },
    login (context, payload) {
      const { email, password } = payload
      return axios({
        method: 'POST',
        url: '/customerLogin',
        data: {
          email, password
        }
      })
    },
    register (context, payload) {
      if (payload.gender === 'Any') {
        payload.gender = ''
      }
      return axios({
        method: 'POST',
        url: '/customerRegister',
        data: {
          first_name: payload.first_name,
          last_name: payload.last_name,
          gender: payload.gender,
          email: payload.email,
          password: payload.password
        }
      })
    },
    removeFromCart (context, productId) {
      const token = localStorage.getItem('token')
      return axios({
        method: 'DELETE',
        url: '/cart/' + productId,
        headers: {
          token
        }
      })
    },
    removeFromWishlist (context, productId) {
      const token = localStorage.getItem('token')
      axios({
        method: 'DELETE',
        url: '/wishlist/' + productId,
        headers: {
          token
        }
      })
        .then(result => {
          context.dispatch('getProducts')
          context.dispatch('getWishlist')
        })
    }
  },
  modules: {
  }
})
