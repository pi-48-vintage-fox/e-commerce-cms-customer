<template>
  <div
    class="container mt-5 p-3 border border-dark rounded-lg"
    style="max-width: 500px"
  >
    <b-form @submit.prevent="login">
      <h1>Login</h1>
      <b-form-group
        label="Email address:"
        label-for="email-login"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="email-login"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Password:" label-for="password-login">
        <b-form-input
          id="password-login"
          v-model="password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="form-control"
        >Login</b-button
      >
    </b-form>
    <p class="text-right">Need an Account? <router-link to="/register">Register Here</router-link>!</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('login')
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store
        .dispatch('login', payload)
        .then(({ data }) => {
          console.log(data)
          localStorage.access_token = data.access_token
          localStorage.email = data.email
          this.email = ''
          this.password = ''
          this.$store.commit('LOG_IN')
          this.$router.push('/')
        })
        .catch((err) => {
          this.email = ''
          this.password = ''
          this.$bvToast.toast(err.response.data.msg, {
            title: 'Error',
            toaster: 'b-toaster-top-center',
            variant: 'danger',
            autoHideDelay: 2000,
            solid: true
          })
        })
    }
  }
}
</script>
