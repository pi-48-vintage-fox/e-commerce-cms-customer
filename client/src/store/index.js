import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    access_token: localStorage.access_token
  },
  mutations: {
    SET_PRODUCTS (state, prodData) {
      state.products = prodData
    },
    SET_CARTS (state, cartData) {
      state.carts = cartData
    }
  },
  actions: {
    getProducts (context, payload) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    },

    addCart (context, payload) {
      axios({
        method: 'POST',
        url: '/carts',
        data: {
          ProductId: payload.ProductId,
          quantity: payload.quantity
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    showCart (context, payload) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_CARTS', data)
        })
        .catch(err => {
          console.log(err)
          context.commit('SET_CARTS', [])
        })
    },

    changeQty (context, payload) {
      axios({
        method: 'PATCH',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload.ProductId,
          quantity: payload.quantity
        }
      })
        .then(() => {
          context.dispatch('showCart')
          console.log('Successfully changed quantity!')
        })
        .catch(err => {
          context.dispatch('showCart')
          console.log(err)
        })
    },

    removeCart (context, payload) {
      axios({
        method: 'DELETE',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload.ProductId
        }
      })
        .then(() => {
          context.dispatch('showCart')
          console.log('Successfully removed item from cart!')
        })
        .catch(() => {
          context.dispatch('showCart')
        })
    }
  },
  modules: {
  }
})
