import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    carts: [],
    histories: [],
    currentUser: ''
  },
  mutations: {
    LOG_OUT (state) {
      state.isLogin = false
      state.products = []
      state.carts = []
      state.currentUser = ''
    },
    LOG_IN (state) {
      state.isLogin = true
      state.currentUser = localStorage.email
    },
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    SET_CARTS (state, carts) {
      state.carts = carts
    },
    SET_HISTORIES (state, histories) {
      state.histories = histories
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    register (context, payload) {
      return axios({
        method: 'POST',
        url: '/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProducts ({ commit }) {
      axios({
        method: 'GET',
        url: '/cust/products',
      })
        .then(({ data }) => {
          commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCarts ({ commit }) {
      axios({
        method: 'GET',
        url: '/cust/cart',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          commit('SET_CARTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchHistories ({ commit }) {
      axios({
        method: 'GET',
        url: '/cust/checkout',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          commit('SET_HISTORIES', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkout (context) {
      return axios({
        method: 'PUT',
        url: '/cust/checkout',
        headers: { access_token: localStorage.access_token }
      })
    },
    addCart (context, ProductId) {
      return axios({
        method: 'POST',
        url: '/cust/addcart',
        headers: { access_token: localStorage.access_token },
        data: {
          ProductId
        }
      })
    },
    updateCart (context, payload) {
      return axios({
        method: 'PATCH',
        url: `/cust/cart/${payload.id}`,
        headers: { access_token: localStorage.access_token },
        data: {
          qty: payload.qty
        }
      })
    },
    deleteCart (context, id) {
      return axios({
        method: 'DELETE',
        url: `/cust/cart/${id}`,
        headers: { access_token: localStorage.access_token }
      })
    }
  },
  modules: {
  }
})
