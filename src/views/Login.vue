<template>
  <div class="login-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <h3>OlShop</h3>
          <form @submit.prevent="login" class="mt-5">
            <div class="form-group">
              <input v-model="userLogin.email" type="email" class="form-control" placeholder="Enter email" aria-describedby="emailHelp" required>
            </div>
            <div class="form-group mt-5">
              <input v-model="userLogin.password" type="password" class="form-control" placeholder="Password" required>
            </div>
            <button type="submit" class="btn mt-5">LOGIN</button>
          </form>
          <div class="to-regis mt-5">
            <router-link class="register" to="/register">REGISTER</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosinstance'
export default {
  name: 'Login',
  data () {
    return {
      userLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: '/login',
        data: this.userLogin
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('role', data.role)
          if (data.role === 'admin') {
            this.$router.push({ name: 'Dashboard' })
          } else if (data.role === 'customer') {
            this.$router.push({ name: 'Product' })
          }
          location.reload()
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  beforeRouteEnter (to, from, next) {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      next({ name: 'Product' })
    } else {
      next()
    }
  }
}
</script>

<style scoped>
  .container {
    margin-top: 133px;
    text-align: center;
  }

  .btn {
    background-color: #e84118;
    padding-left: 20px;
    transition: .5s;
  }

  .register {
    background-color: #353b48;
    padding: 10px;
    padding-left: 20px;
    transition: .5s;
  }

  h3 {
    letter-spacing: 10px;
    font-weight: 800;
    color: #e84118;
  }

  button, .register {
    letter-spacing: 10px;
    text-align: center;
    border-radius: 0%;
    color: white;
  }

  .btn:hover, .register:hover{
    letter-spacing: 5px;
  }

</style>
