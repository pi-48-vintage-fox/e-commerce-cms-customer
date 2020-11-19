import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://oncom-app.herokuapp.com/'
})

export default instance
