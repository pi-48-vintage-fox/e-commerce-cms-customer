<template>
  <section class="container" id="login">
    <div class="row justify-content-center mt-5">
      <div class="col-4 fas">
        <h1 class="text-white">Login</h1>
        <form @submit.prevent="login" class="text-white">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="email"
              type="text"
              id="email"
              class="form-control"
              placeholder="input your email"
              autocomplete="email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="form-control"
              placeholder="input your password"
              autocomplete="current-password"
            />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <router-link to="/register">
          <button
            type="button"
            class="btn btn-success"
          >
            Register
          </button>
          </router-link>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "LoginPage",
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login() {
      console.log('masuk data login index')
      const payload = {
        email: this.email,
        password: this.email
      }
      console.log(payload);
      this.$store.dispatch('login', payload)
      .then(data => {
        this.$router.push({ path: '/'})
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
}
</script>
