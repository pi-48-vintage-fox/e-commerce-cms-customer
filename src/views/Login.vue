<template>
  <div id="landing">
    <div class="container justify-content-center" id="landing-page">
      <div id="login-box">
          <div class="container justify-content-center mt-5 col-6">
              <form @submit.prevent="login" class="mt-5">
                  <h3 class="text-dark text-center font-weight-bolder">Plantopedia Login</h3><br>
                  <div class="form-group">
                      <label for="email_login" class="text-dark">Email</label>
                      <input type="email" class="form-control" id="email_login" aria-describedby="emailHelp" autocomplete="email" v-model="email">
                  </div>
                  <div class="form-group">
                      <label for="password_login" class="text-dark">Password</label>
                      <input type="password" class="form-control" id="password_login" autocomplete="current-password" v-model="password">
                  </div>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  <br><button type="submit" class="btn btn-dark" style="width: 100%">Login</button>
              </form>
          </div>
          <small class="text-muted mt-5" @click="register">Create an account</small>
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
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
      this.$store.commit('SET_NAVBAR', localStorage.access_token)
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style>

</style>
