import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-server-zul.herokuapp.com/',
  headers: {
    access_token: localStorage.access_token
  }
})

export default instance
