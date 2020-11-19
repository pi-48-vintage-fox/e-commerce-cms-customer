import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetchCart: {},
    fetchProduct: {}
  },
  mutations: {
    FETCHPRODUCT (state, data) {
      state.fetchProduct = data
    },
    FETCHCART (state, data) {
      state.fetchCart = data
    }
  },
  actions: {
    login (commit, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
        })
    },
    register (commit, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: '/cart/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('FETCHPRODUCT', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCart (context) {
      axios({
        method: 'GET',
        url: '/cart',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('FETCHCART', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, payload) {
      const access_token = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: `/cart/${payload.id}`,
        headers: {
          access_token
        }
      })
    },
    removeItem (context, payload) {
      const access_token = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        url: `/cart/${payload.id}`,
        headers: {
          access_token
        }
      })
    },
    updateItem (context, payload) {
      const access_token = localStorage.getItem('access_token')
      axios({
        method: 'PATCH',
        url: `/cart/${payload.id}`,
        headers: {
          access_token
        },
        data: {
          qty: payload.qty
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
