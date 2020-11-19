<template>
  <div
    class="container mt-5 p-3 border border-dark rounded-lg"
    style="max-width: 500px"
  >
    <b-form @submit.prevent="register">
      <h1>Create an account</h1>
      <b-form-group
        label="Email address:"
        label-for="email-register"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="email-register"
          v-model="email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Password:" label-for="password-register">
        <b-form-input
          id="password-register"
          v-model="password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="form-control"
        >Register</b-button
      >
    </b-form>
    <p class="text-right">Already have an Account? <router-link to="/login">Login Here</router-link>!</p>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      console.log('register')
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store
        .dispatch('register', payload)
        .then(({ data }) => {
          console.log(data)
          this.email = ''
          this.password = ''
          this.$router.push('/login')
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
