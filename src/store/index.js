import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    productIdCart: null,
    quantityCart: null
  },
  mutations: {
    setProducts (state, dataProducts) {
      state.products = dataProducts
    },
    setCarts (state, dataCarts) {
      state.carts = dataCarts
    },
    setProductId_forCart (state, productId) {
      state.productIdCart = productId
    },
    setProduct_quantity (state, stock) {
      state.productStock = stock
    }
  },
  actions: {
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchCarts (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setCarts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    addCart (context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/carts',
        data: {
          ProductId: payload.productId,
          quantity: payload.quantity
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          context.dispatch('fetchCarts')
          Swal.fire(
            'Success',
            'Success added to cart',
            'success'
          )
        })
        .catch(err => {
          console.log(err)
        })
    },

    cartById (context, payload) {
      console.log(payload)
      axios({
        method: 'GET',
        url: `http://localhost:3000/carts/${payload.productId}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          if (data) {
            this.dispatch('updateCart', payload)
          } else if (!data) {
            this.dispatch('addCart', payload)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },

    updateCart (context, payload) {
      if (payload.quantity >= payload.stock) {
        Swal.fire(
          `Failed`,
          `Quantity cannot more than stock`,
          `error`
        )
      } else {
        axios({
          method: 'PATCH',
          url: `http://localhost:3000/carts/${payload.ProductId}`,
          data: {
            quantity: +payload.quantity
          },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(data => {
            console.log(data);
            this.dispatch('fetchCarts')
          })
          .catch(err => {
            console.log(err)
          })
      }
    },

    deleteCart (context, payload) {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/carts/${+payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          this.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },

    register (context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/register',
        data: {
          email: payload.email,
          password: payload.password,
          role: payload.role
        }
      })
        .then()
    },
    login (context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
