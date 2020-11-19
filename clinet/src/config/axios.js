import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-server-web-app.herokuapp.com/'

})

export default instance
