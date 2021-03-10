import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: []
  },
  mutations: {
    SET_PRODUCTS (state, dataProducts) {
      state.products = dataProducts
    },
    SET_CARTS (state, dataCarts) {
      state.carts = dataCarts
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        // url: 'http://localhost:3000/login',
        url: `https://e-commerce-bimodwien.herokuapp.com/login`,
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          Swal.fire('Login Sukses!')
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },

    register (context, payload) {
      axios({
        method: 'POST',
        // url: 'http://localhost:3000/register',
        url: `https://e-commerce-bimodwien.herokuapp.com/register`,
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
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        // url: 'http://localhost:3000/productCustomers',
        url: `https://e-commerce-bimodwien.herokuapp.com/productCustomers`,
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchCarts (context, payload) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        // url: 'http://localhost:3000/carts',
        url: `https://e-commerce-bimodwien.herokuapp.com/carts`,
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('SET_CARTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    addCarts (context, payload) {
      const token = localStorage.getItem('access_token')
      console.log(payload, '<<<<<<< buat ke Addcarts')
      axios({
        method: 'POST',
        // url: `http://localhost:3000/carts/${payload.productId}`,
        url: `https://e-commerce-bimodwien.herokuapp.com/carts/${payload.productId}`,
        headers: {
          access_token: token
        },
        data: {
          quantity: payload.quantity
        }
      })
        .then(({ data }) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your item has been added to carts',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(data, '<<<<<<<< ini data di addcarts')
          context.dispatch('fetchCarts')
          // router.push('/carts')
        })
        .catch(err => {
          console.log(err)
        })
    },

    tambah (context, payload) {
      console.log(payload, '<<<<<<<< ini payload cuy')
      const qty = payload.quantity
      const token = localStorage.getItem('access_token')
      axios({
        method: 'PATCH',
        // url: `http://localhost:3000/cartsTambah/${payload.id}`,
        url: `https://e-commerce-bimodwien.herokuapp.com/cartsTambah/${payload.id}`,
        headers: {
          access_token: token
        },
        data: {
          quantity: qty + 1
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },

    kurang (context, payload) {
      const qty = payload.quantity
      const token = localStorage.getItem('access_token')
      axios({
        method: 'PATCH',
        // url: `http://localhost:3000/cartsKurang/${payload.id}`,
        url: `https://e-commerce-bimodwien.herokuapp.com/cartsKurang/${payload.id}`,
        headers: {
          access_token: token
        },
        data: {
          quantity: qty - 1
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteCart (context, id) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        // url: `http://localhost:3000/carts/${id}`,
        url: `https://e-commerce-bimodwien.herokuapp.com/carts/${id}`,
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },

    checkOut (context, payload) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        // url: 'http://localhost:3000/checkout',
        url: `https://e-commerce-bimodwien.herokuapp.com/checkout`,
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          Swal.fire('Success Checkout')
          context.dispatch('fetchProducts')
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }

  },
  modules: {
  }
})
