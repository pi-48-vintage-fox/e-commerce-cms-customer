import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    products: [],
    banners: [],
    cart: {},
    productCategories: [],
    totalPrice: 0,
    isSigningIn: false,
    isFetchingProducts: false,
    isFetchingBanners: false,
    isLoggedIn: false,
  },
  mutations: {
    SET_IS_LOGGED_IN(state, payload) {
      state.isLoggedIn = payload
    },
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload
    },
    SET_PRODUCT_CATEGORIES(state, payload) {
      state.productCategories = payload
    },
    SET_BANNERS(state, payload) {
      state.banners = payload
    },
    SET_IS_SIGNING_IN(state, payload) {
      state.isSigningIn = payload
    },
    SET_IS_FETCHING_PRODUCTS(state, payload) {
      state.isFetchingProducts = payload
    },
    SET_IS_FETCHING_PRODUCT_CATEGORIES(state, payload) {
      state.isFetchingProductCategories = payload
    },
    SET_IS_FETCHING_BANNERS(state, payload) {
      state.isFetchingBanners = payload
    },
    SET_CART(state, payload) {
      state.cart = payload
    },
    SET_TOTAL_PRICE(state, payload) {
      state.totalPrice = payload
    },
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    },
  },
  actions: {
    checkout({ commit, state }) {
      // kurangi stock

      let orders = state.cart.CartProducts.map(cartitem => {
        return {
          ProductId: cartitem.ProductId,
          quantity: cartitem.quantity,
          price: cartitem.Product.price,
        }
      })

      console.log(orders, '<<<<< orders')

      // set status cart jadi paid
      // axios({
      //   method: 'PATCH',
      //   url: '/',
      //   data: {
      //     status: 'paid',
      //   },
      //   headers: {
      //     access_token: localStorage.getItem('access_token'),
      //   },
      // })
      //   .then(({ data }) => {
      //     console.log(data, '<<< update status cart')
      //   })
      //   .catch(err => {
      //     console.log(err.response.data, '<<<<< error updating cart status')
      //   })
    },
    getTotalPrice({ commit, state }) {
      let orders = state.cart.CartProducts.map(cartitem => {
        return {
          totalItemPrice: +cartitem.quantity * +cartitem.Product.price,
        }
      })

      console.log({ orders })

      let totalPrice = 0

      orders.forEach(item => (totalPrice += item.totalItemPrice))

      // let totalPrice = state.cart.CartProducts.reduce((acc, item) => {
      //   return acc + item.quantity * item.Product.price
      // })
      console.log({ totalPrice })
      commit('SET_TOTAL_PRICE', totalPrice)
    },
    fetchCart({ commit }) {
      console.log('fetch cart')
      axios({
        method: 'GET',
        url: '/carts/current',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      })
        .then(({ data }) => {
          console.log(data, '<<<<< current cart')
          commit('SET_CART', data)
        })
        .catch(err => {
          console.log(err.response.data, '<<<<< error fetching cart')
        })
    },
    updateQuantity({ dispatch }, payload) {
      console.log('update quantity')
      axios({
        method: 'PATCH',
        url: '/cartitems',
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      })
        .then(({ data }) => {
          console.log(data, '<<< result update quantity')
          dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err.response.data, '>>>> error update quantity')
          dispatch('fetchCart')
        })
    },
    addProductToCart({ dispatch }, payload) {
      console.log('add product to cart')
      axios({
        method: 'POST',
        url: '/cartitems',
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      })
        .then(({ data }) => {
          console.log(data, '<<< result add product to cart')
          dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err.response.data, '>>>> error add product to cart')
          dispatch('fetchCart')
        })
    },
    signOut({ commit }) {
      if (gapi.auth2) {
        const auth2 = gapi.auth2.getAuthInstance()
        auth2.signOut().then(() => {
          console.log('User signed out.')
          localStorage.clear()
          commit('SET_USER', '')
          commit('SET_CART', '')
          commit('SET_TOTAL_PRICE', '')
          commit('SET_IS_LOGGED_IN', false)
        })
      } else {
        console.log('User signed out.')
        localStorage.clear()
        commit('SET_USER', '')
        commit('SET_IS_LOGGED_IN', false)
      }
    },
    onSignIn({ commit }, googleUser) {
      console.log('on google sign in')

      const id_token = googleUser.getAuthResponse().id_token
      console.log('id_token', id_token)
      axios({
        method: 'POST',
        url: '/googleLogin',
        data: { token: id_token },
      })
        .then(({ data }) => {
          console.log(data, '>>> google sign in response')
          if (data.access_token) {
            localStorage.setItem('access_token', data.access_token)
          }

          commit('SET_USER', data)
          commit('SET_IS_LOGGED_IN', true)

          // this.$emit('showMessage', {
          //   msg: 'Login successfull',
          //   type: 'success',
          // })
          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data, '>>>> google sign in error')
          // this.$emit('showMessage', { msg: err, type: 'error' })
          commit('SET_IS_LOGGED_IN', false)
        })
    },
    submitLoginForm({ commit }, payload) {
      console.log({ payload })

      axios({
        method: 'POST',
        url: '/login',
        data: payload,
      })
        .then(({ data }) => {
          console.log('berhasil login', data)
          if (data.access_token) {
            localStorage.setItem('access_token', data.access_token)
          }

          commit('SET_USER', data)
          commit('SET_IS_LOGGED_IN', true)

          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data)
          commit('SET_IS_LOGGED_IN', false)

          // this.$emit('showMessage', {
          //   msg: err,
          //   type: 'error',
          // })
        })
    },

    submitRegistration(_, payload) {
      console.log('submit register form')

      console.log({ payload })

      axios({
        method: 'POST',
        url: '/register',
        data: payload,
      })
        .then(({ data }) => {
          console.log('berhasil register', data)

          // this.$emit('showMessage', {
          //   msg: 'Account registration successful',
          //   type: 'success',
          // })
          router.push('/login')
        })
        .catch(err => {
          console.log(err.response.data)

          // this.$emit('showMessage', {
          //   msg: err,
          //   type: 'error',
          // })
        })
    },

    fetchUserDetails({ commit }) {
      console.log('fetching user details')

      axios({
        method: 'GET',
        url: '/user',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      })
        .then(({ data }) => {
          console.log(data, '<<< user details')
          commit('SET_USER', data)
          commit('SET_IS_LOGGED_IN', true)
        })
        .catch(err => {
          console.log(err.response.data, '<<< error fetching user')
        })
    },
    fetchBanners({ commit }) {
      console.log('fetching banners')
      commit('SET_IS_FETCHING_BANNERS', true)
      axios({
        method: 'GET',
        url: '/banners',
      })
        .then(({ data }) => {
          console.log(data, '<<< banners')
          commit('SET_IS_FETCHING_BANNERS', false)

          commit('SET_BANNERS', data)
        })
        .catch(err => {
          console.log(err.response.data, '<<< error fetching user')
          commit('SET_IS_FETCHING_BANNERS', false)
        })
    },
    fetchProductCategories({ commit }) {
      console.log('fetching product categories')
      commit('SET_IS_FETCHING_PRODUCT_CATEGORIES', true)

      axios({
        method: 'GET',
        url: '/categories',
      })
        .then(({ data }) => {
          console.log(data, '<<< product categories')
          commit('SET_IS_FETCHING_PRODUCT_CATEGORIES', false)

          commit('SET_PRODUCT_CATEGORIES', data)
        })
        .catch(err => {
          console.log(
            err.response.data,
            '<<< error fetching product categories'
          )
          commit('SET_IS_FETCHING_PRODUCT_CATEGORIES', false)
        })
    },
    fetchProducts({ commit }) {
      console.log('fetching products')
      commit('SET_IS_FETCHING_PRODUCTS', true)

      axios({
        method: 'GET',
        url: '/products',
      })
        .then(({ data }) => {
          console.log(data, '<<< products')
          commit('SET_IS_FETCHING_PRODUCTS', false)

          commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err.response.data, '<<< error fetching products')
          commit('SET_IS_FETCHING_PRODUCTS', false)
        })
    },
  },

  modules: {},
})
