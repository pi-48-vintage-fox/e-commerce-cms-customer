import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-server-web.herokuapp.com/'

})

export default instance
