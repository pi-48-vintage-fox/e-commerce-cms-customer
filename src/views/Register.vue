<template>
  <div id="landing">
    <div class="container justify-content-center" id="landing-page">
      <div id="login-box">
          <div class="container justify-content-center mt-5 col-6">
              <form @submit.prevent="register" class="mt-5">
                  <h3 class="text-dark text-center font-weight-bolder" style="margin-top: 50px">Plantopedia Register</h3><br>
                  <div class="form-group">
                      <label for="email_register" class="text-dark">Email</label>
                      <input type="email" class="form-control" id="email_register" aria-describedby="emailHelp" autocomplete="email" v-model="email">
                  </div>
                  <div class="form-group">
                      <label for="password_register" class="text-dark">Password</label>
                      <input type="password" class="form-control" id="password_register" autocomplete="current-password" v-model="password">
                  </div>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  <br><button type="submit" class="btn btn-dark" style="width: 100%">Create An Account</button>
              </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style>

</style>
