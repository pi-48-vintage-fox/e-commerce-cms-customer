import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    product: {},
    addForm: false
  },
  mutations: {
    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    },
    FETCH_CARTS (state, payload) {
      state.carts = payload
    },
    FETCH_PRODUCT (state, payload) {
      console.log(payload)
    },
    CLOSE_ADDFORM (state, payload) {
      console.log(payload)
      state.addForm = payload
    }
  },
  actions: {
    register (context, payload) {
      return Axios
        .post('https://server-e-commerce.herokuapp.com/register', {
          email: payload.email,
          password: payload.password
        })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      return Axios
        .post('https://server-e-commerce.herokuapp.com/login', {
          email: payload.email,
          password: payload.password
        })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts ({ commit }) {
      let dataFilter = []
      Axios
        .get('https://server-e-commerce.herokuapp.com/products', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          dataFilter = data.filter(el => el.stock !== 0)
          dataFilter.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
          commit('FETCH_PRODUCTS', dataFilter)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, payload) {
      return Axios
        .post(`https://server-e-commerce.herokuapp.com/carts/${payload.id}`, {
          quantity: payload.quantity
        },
        {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          this.fetchCarts()
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCarts ({ commit }) {
      Axios
        .get('https://server-e-commerce.herokuapp.com/carts', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          data.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
          commit('FETCH_CARTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (context, payload) {
      Axios
        .delete(`https://server-e-commerce.herokuapp.com/carts/${payload}`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          this.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editCart (context, payload) {
      Axios
        .put(`https://server-e-commerce.herokuapp.com/carts/${payload.id}`, {
          quantity: payload.quantity,
          status: payload.status
        }, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          this.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
