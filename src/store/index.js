import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    carts: [],
    cart: {}
  },
  mutations: {
    getProducts (state, payload) {
      state.products = payload
    },
    getProductById (state, payload) {
      state.product = payload
    },
    getCarts (state, payload) {
      state.carts = payload
    },
    getCartsById (state, payload) {
      state.cart = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    register (context, payload) {
      return axios({
        url: '/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password,
          full_name: payload.full_name
        }
      })
    },
    getProductById (context, id) {
      return axios({
        url: `/products/${id}`,
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({
          data
        }) => {
          console.log(data)
          context.commit('getProductById', data)
        })
    },
    fetchProducts (context, payload) {
      console.log("masuk fetch");
      return axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({
          data
        }) => {
          context.commit('getProducts', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addProductToCart (context, payload) {
      return axios({
        url: `/carts/${payload.ProductId}`,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          quantity: payload.quantity
        }
      })
        .then((data) => {
          console.log(data, '<<<<< ini di add product to cart')
        })
        .catch((err) => {
          console.log(err, '<<<< ini error add product to cart')
        })
    },
    fetchCart (context, payload) {
      return axios({
        url: '/carts',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({
          data
        }) => {
          context.commit('getCarts', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteCart(context, payload){
      console.log(payload);
      return axios({
        url: `/carts/${payload.id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(() => {
        context.dispatch("fetchCart")
      })
      .catch((err) => {
        console.log(err);
      })
    },
    updateCart(context, payload){
      return axios({
        url: `/carts/${payload.id}`,
        method: 'PATCH',
        data: {
          qty: payload.qty
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        },
      })
      .then(() => {
        context.dispatch("fetchCart")
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },
  modules: {}
})
