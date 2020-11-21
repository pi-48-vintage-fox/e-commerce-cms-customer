import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productPublic: '',
    carts: ''
  },
  mutations: {
    FETCH_PRODUCT_PUBLIC(state, data) {
      state.productPublic = data
    },
    FETCH_CART(state, data) {
      state.carts = data
    }
  },
  actions: {

    login({ commit }, payload) {
      console.log(payload);
      console.log('masuk data store index')
      return axios({
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

    register({ commit }, payload) {
      return axios({
        method: 'POST',
        url: '/register',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })
    },

    fetchProductPublic({ commit }) {
      axios({
        method: 'GET',
        url: '/productPublic'
      })
        .then(({ data }) => {
          commit('FETCH_PRODUCT_PUBLIC', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchCart({ commit }) {
      axios({
        method: 'GET',
        url: '/cart',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('FETCH_CART', data)
        })
        .catch((err) => {
          console.log(err.response);
        })
    },

    addToCart({ commit }, payload) {
      console.log(payload);
      return axios({
        method: 'POST',
        url: `/cart/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          quantity: payload.quantity
        }
      })
    },

    updateCart({ commit }, payload) {
      return axios({
        method: 'PUT',
        url: `/cart/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          quantity: payload.quantity
        }
      })
    },

    deleteProduct({ commit }, id) {
      console.log(id);
      return axios({
        method: 'DELETE',
        url: `/cart/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
