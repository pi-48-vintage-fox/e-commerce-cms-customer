import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/instance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      return axios({
        method: 'POST',
        url: 'customerLogin',
        data: {
          email, password
        }
      })
    }
  },
  modules: {
  }
})
