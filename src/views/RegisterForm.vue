<template>
  <div class="container" id="login">
        <form @submit.prevent="register">
            <div style="width: 50%; margin: 200px auto;">
              <h1>Register</h1>
                <div class="form-group">
                  <label for="login-email">Email</label>
                  <input type="email" v-model="email" class="form-control" id="register-email" aria-describedby="emailHelp">
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" v-model="password" class="form-control" id="register-password" >
                </div>
                <div class="row">
                  <div class="col">
                    <button type="submit" class="btn btn-primary form-control">REGISTER</button>
                  </div>
                </div>
            </div>
          </form>
      </div>
</template>

<script>
export default {
  name: 'RegisterForm',
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
        .then(() => {
          this.$router.push({ path: '/login' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
