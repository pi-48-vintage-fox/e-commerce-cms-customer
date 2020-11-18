import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosinstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'OlSHOP',
    products: [],
    product: {},
    categories: [],
    banners: [],
    carts: []
  },
  mutations: {
    getProducts (state, payload) {
      state.products = payload
    },
    getProduct (state, payload) {
      state.product = payload
    },
    getStock (state, payload) {
      state.stock = payload
    },
    getCategories (state, payload) {
      state.categories = payload
    },
    getBanners (state, payload) {
      state.banners = payload
    },
    getCarts (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          context.commit('getProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: '/products',
        method: 'POST',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        },
        headers: {
          access_token: accessToken
        }
      })
    },
    fetchCategories (context) {
      axios
        .get('/categories')
        .then(({ data }) => {
          context.commit('getCategories', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCatogory (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: '/categories',
        method: 'POST',
        data: payload,
        headers: {
          access_token: accessToken
        }
      })
    },
    getProductById (context, id) {
      axios({
        url: `/products/${+id}`,
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('getProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      return axios({
        url: `/products/${+payload.id}`,
        method: 'PUT',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    deleteProduct (context, id) {
      return axios({
        url: `/products/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    buy (context, payload) {
      return axios({
        url: `/products/${+payload.id}`,
        method: 'PATCH',
        data: {
          stock: +payload.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    fetchBanner (context) {
      axios
        .get('/banner')
        .then(({ data }) => {
          context.commit('getBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addBanner (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: '/banner',
        method: 'POST',
        headers: {
          access_token: accessToken
        },
        data: payload
      })
    },
    deleteBanner (context, id) {
      return axios({
        url: `/banner/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    fetchCart (context) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: '/cart',
        method: 'GET',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.commit('getCarts', data)
        })
        .catch(console.log)
    },
    addCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: '/cart',
        method: 'POST',
        headers: {
          access_token: accessToken
        },
        data: {
          ProductId: payload.ProductId,
          qty: +payload.qty
        }
      })
    }
  },
  modules: {
  },
  getters: {
    categoryFilter: (state) => (category) => {
      return state.products.filter(el => {
        return el.Category.name === category
      })
    }
  }
})
