import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProduct: '',
    banner: '',
    cart: '',
    emailIsLogin: '',
    ProductById: ''
  },
  mutations: {
    GET_ALL_PRODUCT (state, payload) {
      state.allProduct = payload
    },
    GET_ALL_BANNER (state, payload) {
      state.banner = payload
    },
    GET_CART_BYID (state, payload) {
      state.cart = payload
    },
    SET_EMAILISLOGIN (state, payload) {
      state.emailIsLogin = payload
    },
    DATA_PRODUCT_BY_ID (state, payload) {
      state.ProductById = payload
    }
  },
  actions: {
    fetchProduct (context) {
      axios({
        url: '/productCustomer',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('GET_ALL_PRODUCT', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchBanner (context) {
      axios({
        url: '/bannerCustomer',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('GET_ALL_BANNER', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    register (context, payload) {
      return axios({
        url: '/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
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
    addToCart(context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: '/cart',
        method: 'POST',
        headers: {access_token: accessToken},
        data: {
          ProductId: payload,
        }
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => {
        console.log(err.response);
      })
    },
    fetchCart (context) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: '/cart',
        method: 'GET',
        headers: {access_token: accessToken}
      })
      .then(({ data }) => {
        context.commit('GET_CART_BYID', data)
      })
      .catch(err => {
        console.log(err.response);
      })
    },
    deleteCart (context, payload) {
      console.log(payload);
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `/cart`,
        method: 'DELETE',
        headers: {access_token: accessToken},
        data: {
          ProductId: payload
        }
      })
    },
    fetchUpdate(context, idProduct) {
      console.log(idProduct, 'fom store');
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `/cart/${idProduct}`,
        method: 'GET',
        headers: {access_token: accessToken}
      })
      .then(({data}) => {
        context.commit('DATA_PRODUCT_BY_ID', data)
      })
      .catch(err => {
        console.log(err);
      })
    },
    updateQty (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: '/cart',
        method: 'PATCH',
        headers: {access_token: accessToken},
        data: {
          quantity: payload.qty,
          ProductId: payload.ProductId
        }
      })
    }
  },
  modules: {
  }
})
