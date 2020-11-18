import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: []
  },
  mutations: {
    SET_PRODUCTS (state, dataProducts) {
      state.products = dataProducts
    },
    SET_CARTS (state, dataCarts) {
      state.carts = dataCarts
    }
  },
  actions: {
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/custProducts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCarts (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('SET_CARTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: payload
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push({ path: '/' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
