import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-cms-h8.herokuapp.com'
})

export default instance
