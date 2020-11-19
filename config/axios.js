import axios from 'axios'
const instance = axios.create({
  // baseURL: 'http://localhost:3000',
  // baseU
  baseURL: 'https://e-commerce-server-rr.herokuapp.com',
})

export default instance
