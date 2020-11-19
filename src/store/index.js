import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    transactions: []
  },
  mutations: {
    SET_PRODUCTS (state, dataProducts) {
      state.products = dataProducts
    },
    SET_CARTS (state, dataCarts) {
      state.carts = dataCarts
    },
    SET_TRANSACTIONS (state, dataTransactions) {
      state.transactions = dataTransactions
    }
  },
  actions: {
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: 'https://frish-commerce.herokuapp.com/custProducts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    },
    fetchCarts (context, payload) {
      axios({
        method: 'GET',
        url: 'https://frish-commerce.herokuapp.com/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('SET_CARTS', data)
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    },
    fetchTransactions (context, payload) {
      axios({
        method: 'GET',
        url: 'https://frish-commerce.herokuapp.com/transactions',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('SET_TRANSACTIONS', data)
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'https://frish-commerce.herokuapp.com/login',
        data: payload
      })
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: 'Login success',
            showConfirmButton: false,
            timer: 2000
          })
          localStorage.setItem('access_token', response.data.access_token)
          router.push({ path: '/' })
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    },
    register (context, payload) {
      axios({
        method: 'POST',
        url: 'https://frish-commerce.herokuapp.com/register',
        data: payload
      })
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: 'Register success',
            showConfirmButton: false,
            timer: 2000
          })
          console.log(response)
          router.push({ path: '/login' })
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    },
    addToCart ({ dispatch }, payload) {
      axios({
        method: 'POST',
        url: `https://frish-commerce.herokuapp.com/carts/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: 'Product has been added. Please check your cart',
            showConfirmButton: false,
            timer: 2000
          })
          dispatch('fetchCarts')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    },
    minusQty ({ dispatch }, payload) {
      axios({
        method: 'PATCH',
        url: `https://frish-commerce.herokuapp.com/carts/decrement/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity: payload.quantity - 1
        }
      })
        .then(response => {
          dispatch('fetchCarts')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    },
    plusQty ({ dispatch }, payload) {
      axios({
        method: 'PATCH',
        url: `https://frish-commerce.herokuapp.com/carts/increment/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity: payload.quantity + 1
        }
      })
        .then(response => {
          dispatch('fetchCarts')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    },
    deleteCart ({ dispatch }, payload) {
      axios({
        method: 'DELETE',
        url: `https://frish-commerce.herokuapp.com/carts/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: 'your product has been deleted from cart',
            showConfirmButton: false,
            timer: 2000
          })
          dispatch('fetchCarts')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    },
    checkout ({ dispatch }, payload) {
      axios({
        method: 'POST',
        url: 'https://frish-commerce.herokuapp.com/checkout',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: 'Thanks for using FRISH',
            showConfirmButton: false,
            timer: 2000
          })
          dispatch('fetchCarts')
          dispatch('fetchProducts')
          dispatch('fetchTransactions')
        })
        .catch(err => {
          Swal.fire(
            'Error!',
            err.response.data.message,
            'ERROR'
          )
        })
    }
  },
  modules: {
  }
})
