<template>
  <div class="container mt-5">
    <h1>Please Login</h1>
    <div class="row d-flex justify-content-center">
      <div class="col-3">
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
            v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
            v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form><br>
        <button @click="register" class="btn btn-warning">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const dataUser = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', dataUser)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('emailIsLogin', this.email)

          this.$store.commit('SET_EMAILISLOGIN', this.email)
          this.$router.push('/')
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Login Successfuly',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data
            })
        })
    },
    register () {
      const dataUser = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', dataUser)
        .then(({ data }) => {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Register successfuly please login',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          console.log(err.response.data.original.detail);
          if (err.response.data.name === 'SequelizeUniqueConstraintError') {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.original.detail
              })
          } else {
            console.log(err.response.data);
          }
        })
    }
  }
}
</script>

<style>
</style>
