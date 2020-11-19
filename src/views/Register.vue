<template>
  <section>
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h5>Register your account here!</h5>
        </div>
        <form @submit.prevent="register" class="form">
          <label for="user-email" style="padding-top: 13px">
            &nbsp;Full-name
          </label>
          <input v-model="full_name" class="form-content" type="text" />
          <div class="form-border"></div>
          <label for="user-email" style="padding-top: 13px">
            &nbsp;Email
          </label>
          <input v-model="email" class="form-content" type="email" />
          <div class="form-border"></div>
          <label for="user-password" style="padding-top: 22px"
            >&nbsp;Password
          </label>
          <input
            v-model="password"
            class="form-content"
            type="password"
            name="password"
            required
          />
          <div class="form-border"></div>
          <input id="submit-btn" type="submit" name="submit" value="REGISTER" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      full_name: ''
    }
  },
  methods: {
    register () {
      const payload = {
        email: this.email,
        password: this.password,
        full_name: this.full_name
      }
      this.$store
        .dispatch('register', payload)
        .then(({ data }) => {
          this.$router.push('/login')
        })
        .catch(err => {
          const error = err.response.data.message
          swal('Error', `${error}`, 'error')
        })
    }
  }
}
</script>

<style>

</style>
