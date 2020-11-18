<template>
  <div id="Login" class="d-flex justify-content-center text-light">
    <form
      class="form-signin bg-dark px-5 py-5"
      style="border-radius: 5px; margin: 55px auto"
      @submit.prevent="login"
    >
      <img
        class="mb-4"
        src="../assets/logo-web.svg"
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Welcome Back!</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        v-model="email"
        type="email"
        id="inputEmail"
        class="form-control py-4"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        v-model="password"
        type="password"
        id="inputPassword"
        class="form-control py-4 mb-3"
        placeholder="Password"
        required
      />
      <button class="btn btn-lg btn-outline-light btn-block mb-2" type="submit">
        Login
      </button>
      <a href="" class="text-light mr-2" @click.prevent="toRegister"
        >Register</a
      >
      |
      <a href="" class="text-light ml-2" @click.prevent="toHome">Homepage</a>
      <p class="mt-5 mb-3 text-muted">&copy; Rizkyakhid</p>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    },
    toHome () {
      // if (!localStorage.access_token) localStorage.access_token = 'trigger'
      this.$router.push('/')
    },
    login () {
      const loginData = {
        email: this.email,
        password: this.password
      }
      this.$store
        .dispatch('login', loginData)
        .then(() => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Logged in successfully'
          })
        })
        .catch((err) => {
          console.log(err)
        })
      this.toHome()
    }
  }
}
</script>

<style>
</style>
