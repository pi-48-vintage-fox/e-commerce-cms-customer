const axios = require('axios').default

const instance = axios.create({
  baseURL: 'https://server-cms-e-commers.herokuapp.com'
})
//https://server-cms-e-commers.herokuapp.com
//http://localhost:3000
export default instance
