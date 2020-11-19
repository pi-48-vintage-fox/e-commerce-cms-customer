import axios from 'axios'

const instance = axios.create({
    baseURL:'https://e-commerce-septian.herokuapp.com/'
})

export default instance