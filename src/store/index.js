import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

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
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },

    register(context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then(({data}) => {
        router.push('/login')
      })
      .catch(err => {
        console.log(err);
      })
    },

    fetchProducts (context, payload) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: 'http://localhost:3000/productCustomers',
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
        url: 'http://localhost:3000/carts',
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
      const  token = localStorage.getItem('access_token')
      console.log(payload, '<<<<<<< buat ke Addcarts')
      axios({
        method: 'POST',
        url: `http://localhost:3000/carts/${payload.productId}`,
        headers: {
          access_token: token
        },
        data: {
          quantity: payload.quantity
        }
      })
      .then(({data}) => {
        console.log(data,'<<<<<<<< ini data di addcarts');
        context.dispatch('fetchCarts')
        // router.push('/carts')
      })
      .catch(err => {
        console.log(err)
      })
    },

    tambah (context, payload) {
      console.log(payload, '<<<<<<<< ini payload cuy');
      let qty = payload.quantity
      const token = localStorage.getItem('access_token')
      axios({
        method: 'PATCH',
        url: `http://localhost:3000/cartsTambah/${payload.id}`,
        headers: {
          access_token: token
        },
        data: {
          quantity: qty + 1 
        }
      })
      .then(({data}) => {
        context.dispatch('fetchCarts')
      })
      .catch(err => {
        console.log(err);
      })
    },

    kurang (context, payload) {
      let qty = payload.quantity
      const token = localStorage.getItem('access_token')
      axios({
        method: 'PATCH',
        url: `http://localhost:3000/cartsKurang/${payload.id}`,
        headers: {
          access_token: token
        },
        data: {
          quantity: qty - 1 
        }
      })
      .then(({data}) => {
        context.dispatch('fetchCarts')
      })
      .catch(err => {
        console.log(err);
      })
    },

    deleteCart (context, id) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/carts/${id}`,
        headers: {
          access_token: token
        },
      })
      .then(({data}) => {
        context.dispatch('fetchCarts')
      })
      .catch(err => {
        console.log(err);
      })
    }

  },
  modules: {
  }
})
