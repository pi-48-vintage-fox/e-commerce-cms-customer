import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../utils/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    banners: [],
    isLoggedIn: false,
    cart: []
  },
  mutations: {
    SET_CATEGORIES (state, payload) {
      state.categories = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_BANNERS (state, payload) {
      state.banners = payload
    },
    SET_LOGGED_IN (state, payload) {
      state.isLoggedIn = true
    },
    SET_CARTS (state, payload) {
      state.cart = payload
    },
    SET_LOGOUT (state, payload) {
      state.isLoggedIn = false
    }
  },
  actions: {
    fetchCategories ({ commit, dispatch }) {
      axios.get('/categories')
        .then(response => {
          commit('SET_CATEGORIES', response.data.categories)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts ({ commit, dispatch }) {
      axios.get('/products')
        .then(response => {
          commit('SET_PRODUCTS', response.data.products)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBanners ({ commit, dispatch }) {
      axios.get('/banners')
        .then(response => {
          const banners = response.data.banners.filter(item => item.is_active === true)
          commit('SET_BANNERS', banners)
        })
        .catch(err => {
          console.log(err)
        })
    },
    register ({ commit, dispatch }, payload) {
      axios.post('/register', payload)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login ({ commit, dispatch }, payload) {
      axios.post('/login', payload)
        .then(response => {
          this._vm.$events.emit('on_login_success')
          dispatch('fetchUserCart')
          commit('SET_LOGGED_IN')
          localStorage.setItem('access_token', response.data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchUserCart ({ commit, dispatch }, payload) {
      axios.get('/cart')
        .then(response => {
          commit('SET_CARTS', response.data.cartItems)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCart ({ commit, dispatch }, payload) {
      axios
        .post('/cart', payload)
        .then(response => {
          dispatch('fetchProducts')
          dispatch('fetchUserCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCartQty ({ commit, dispatch }, payload) {
      axios
        .put('/cart', payload)
        .then(response => {
          dispatch('fetchUserCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCartItem ({ commit, dispatch }, payload) {
      console.log(payload)
      axios
        .delete('/cart/', {
          data: {
            ProductId: payload.ProductId
          }
        })
        .then(response => {
          dispatch('fetchUserCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkout ({ commit, dispatch }, payload) {
      axios
        .post('/checkout', { cartItems: payload })
        .then(response => {
          dispatch('fetchProducts')
          dispatch('fetchUserCart')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
