import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../axios/axiosInstance'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS (state, dataProducts) {
      state.products = dataProducts
    },
    SET_BANNERS (state, dataBanners) {
      state.banners = dataBanners
    },
    SET_CART (state, dataCart) {
      state.cart = dataCart
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/user/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (context, payload) {
      axios({
        url: '/user/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context, payload) {
      axios({
        url: '/products',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBanners (context, payload) {
      axios({
        url: '/banners',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('SET_BANNERS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: '/cart',
        method: 'GET',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.commit('SET_CART', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: '/cart',
        method: 'POST',
        headers: {
          access_token: accessToken
        },
        data: payload
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: `/cart/${payload.ProductId}`,
        method: 'PATCH',
        headers: {
          access_token: accessToken
        },
        data: {
          quantity: payload.quantity,
          total_price: payload.total_price
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteFromCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: `/cart/${payload.ProductId}`,
        method: 'DELETE',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkOut (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: '/cart/checkout',
        method: 'POST',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
