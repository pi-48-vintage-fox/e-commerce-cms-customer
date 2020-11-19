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
          <button type="submit" class="btn btn-primary">Submit</button>
          ||
        <button @click="register" class="btn btn-warning">Register</button>
        </form>
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
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    register () {
      const dataUser = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', dataUser)
        .then(({ data }) => {
          localStorage.setItem()
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style>
</style>
