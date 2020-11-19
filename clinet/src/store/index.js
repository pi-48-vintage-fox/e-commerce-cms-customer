import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productPublic: ''
  },
  mutations: {
    FETCH_PRODUCT_PUBLIC (state, data) {
      state.productPublic = data
    }
  },
  actions: {

    login ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(data => {
          localStorage.setItem('access_token', data.access_token)
        })
    },

    register ({ commit }, payload) {
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

    fetchProductPublic ({ commit }) {
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
    }
  },
  modules: {
  }
})
