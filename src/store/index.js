import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    addToOrder: [
      { "ProductId": 2, "name": "rivari", "address": "jl raya condet", "quantity": 2, "size": "L", "price": 450000, "totalPrice": 900000, "stock": 33 }
    ]
  },
  mutations: {
    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    },
    ADD_TO_ORDER (state, payload) {
      state.addToOrder.push(payload)
    }
  },
  actions: {
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: payload
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(err => console.log(err.response))
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/loginClient',
        data: payload
      })
      .then(response => {
        // console.log(response.data)
        localStorage.setItem('access_token', response.data.access_token)
        router.push({ path: '/' })
      })
      .catch(err => console.log(err.response))
    },
    logout () {
      localStorage.clear()
      router.push({ path: '/login' })
    },
    fetchProducts(context) {
      const access_token = localStorage.access_token
      axios({
        method: 'GET',
        url: '/productsClient',
        headers: {
          access_token
        }
      })
      .then(response => {
        // console.log(response.data, 'ini fetch product dr store')
        context.commit('FETCH_PRODUCTS', response.data)
      })
      .catch(err => console.log(err.response))
    }
  },
  modules: {
  }
})
