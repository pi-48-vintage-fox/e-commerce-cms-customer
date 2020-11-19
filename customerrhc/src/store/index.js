import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS(state,productList){
      state.products = productList
    },
    SET_CART(state,cartList){
      state.cart = cartList
    }
    // FILTER_PRODUCT(state,cartProduct){
    //   state.cart = cartProduct
    // }
  },
  actions: {
    registerUser (context, payload) {
      return axios({
        method: 'POST',
        url: '/users/register',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('username', data.name)
          localStorage.setItem('role', data.role)
        })
        .catch(err => {data
          console.log(err)
        })
    },
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          if (data.role == 'user') {
            localStorage.setItem('role', data.role)
            localStorage.setItem('access_token', data.access_token)
            localStorage.setItem('username', data.name)

          } else if (data.role == 'admin') {
            throw Error
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    
    fetchProducts (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/products',
        headers: { access_token: accessToken }
      })
        .then(({ data }) => {
          console.log(data, 'fetch')
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    buyProduct (context, payload){
      console.log(payload.id)
      const accessToken = localStorage.getItem('access_token')
      return axios ({
          method: "POST", 
          url: `/products/addToCart/${payload.id}`,
          headers: { access_token: accessToken }
      })
        .then (({data})=>{
          context.dispatch('fetchProducts')
        })
        .catch(err=>{
          console.log(err)
        })
    },
    showCart (context){
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: "GET",
        url:'/products/cart',
        headers: {access_token: accessToken}
      })
       .then(({data})=>{
          console.log(data)
          context.commit('SET_CART', data)
       })
       .catch(err=>{
         console.log(err)
       })

    },
    editCart (context,payload){
      const accessToken = localStorage.getItem('access_token')
      console.log(payload.quantity,'client')
      axios({
        method: "PATCH",
        url:`/products/cart/${payload.id}`,
        headers: {access_token: accessToken},
        data:{
          quantity:payload.quantity
        }
      })
       .then(({data})=>{
          context.dispatch('showCart')
       })
       .catch(err=>{
         console.log(err)
       })
    },
    delCart (context,payload){
      const accessToken = localStorage.getItem('access_token')
      axios({
        method:"DELETE",
        url:`/products/cart/${payload.ProductId}`,
        headers: {access_token: accessToken}
      })
      .then(({data})=>{
        context.dispatch('showCart')
     })
     .catch(err=>{
       console.log(err)
     })
      
    }
  },
  modules: {
  }
})
