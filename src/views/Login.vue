<template>
<div class="container col-3">
  <form
    class="bg-dark mx-auto text-primary my-5 py-5 px-3"
    @submit.prevent="login"
  >
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="password"
      />
    </div>
    <p class="text-warning">Don't have account? <router-link  to="/register">Register here</router-link></p>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
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
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
        .then(data => {
          this.$router.push({ path: '/' })
        })
    }
  }
}
</script>

<style>
</style>
