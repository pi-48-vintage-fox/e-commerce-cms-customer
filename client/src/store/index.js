import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: []
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    SET_CARTS (state, carts) {
      state.carts = carts
    }
  },
  actions: {
    login (context, values) {
      return axios({
        url: '/login',
        method: 'POST',
        data: {
          email: values.email,
          password: values.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('username', data.username)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context) {
      return axios({
        url: '/customers',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data.products)
        })
    },
    fetchCart (context) {
      return axios({
        url: '/customers/cart',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_CARTS', data.carts)
        })
    },
    addToCarts (context, payload) {
      return axios({
        url: '/customers/cart',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(({ data }) => {
          console.log(data, 'berhasil add to cart')
        })
        .catch(err => {
          console.log(err, 'gagal add to cart')
        })
    },
    deleteCart (context, id) {
      return axios({
        url: '/customers/cart/' + id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data, 'sukses delete')
        })
        .catch(err => {
          console.log(err)
        })
    },
    minus (context, payload) {
      return axios({
        url: '/customers/cart/' + payload.id,
        method: 'PATCH',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity: payload.quantity,
          total: payload.total
        }
      })
        .then(({ data }) => {
          console.log(data, 'berhasil kurang')
        })
    },
    plus (context, payload) {
      return axios({
        url: '/customers/cart/' + payload.id,
        method: 'PATCH',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity: payload.quantity,
          total: payload.total
        }
      })
        .then(({ data }) => {
          console.log(data, 'berhasil tambah')
        })
    },
    checkOut (context, payload) {
      return axios({
        url: '/customers/cart',
        method: 'PATCH',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          carts: payload.carts
        }
      })
        .then(() => {
          console.log('checkout jalan')
        })
        .catch((err) => {
          console.log(err, 'chekout gagal')
        })
    },
    register (context, payload) {
      return axios({
        url: '/register',
        method: 'POST',
        data: payload
      })
        .then(({ data }) => {
          console.log(data)
          console.log('berhasil register')
        })
    }
  },
  modules: {
  }
})
