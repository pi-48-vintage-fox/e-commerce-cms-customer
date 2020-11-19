import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://desolate-journey-71799.herokuapp.com'
})

export default instance
