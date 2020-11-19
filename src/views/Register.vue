<template>
  <div class="register-page mt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
        <h3>OlShop</h3>
          <form @submit.prevent="register" class="mt-5">
            <div class="form-group">
              <input v-model="userRegister.email" type="email" class="form-control" required placeholder="Enter email">
            </div>
            <div class="form-group mt-5">
              <input v-model="userRegister.password" type="password" class="form-control" required placeholder="Password">
            </div>
            <button type="submit" class="btn mt-5">REGISTER</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosinstance'
export default {
  name: 'Register',
  data () {
    return {
      userRegister: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      axios({
        method: 'POST',
        url: '/register',
        data: this.userRegister
      })
        .then(({ data }) => {
          if (data) {
            this.$router.push({ name: 'Login' })
          } else {
            this.$router.push({ name: 'Register' })
          }
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
