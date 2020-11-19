<template>
  <div id="Register" class="d-flex justify-content-center text-light">
    <form
      class="form-signin bg-dark px-5 py-5"
      style="border-radius: 5px; margin: 15px auto"
      @submit.prevent="register"
    >
      <img
        class="mb-4"
        src="../assets/logo-web.svg"
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Registration</h1>
      <div class="inputArea text-left">
        <div class="form-group">
          <label for="regName">Name</label>
          <input
            v-model="regName"
            type="text"
            class="form-control py-4"
            id="regName"
            placeholder="e.g. ornestein@mail.us"
            required
          />
        </div>
        <div class="form-group">
          <label for="regEmail">Email</label>
          <input
            v-model="regEmail"
            type="email"
            class="form-control py-4"
            id="regEmail"
            placeholder="e.g. ornestein@mail.us"
            required
          />
        </div>
        <div class="form-group">
          <label for="regPassword">Password</label>
          <input
            v-model="regPassword"
            type="password"
            class="form-control py-4"
            id="regPassword"
            placeholder="Type your password"
            required
          />
        </div>
      </div>
      <button class="btn btn-lg btn-outline-light btn-block mb-2" type="submit">
        Register
      </button>
      <a href="" class="text-light mr-2" @click.prevent="toLogin">Login page</a>
      |
      <a href="" class="text-light ml-2" @click.prevent="toHome">Homepage</a>
      <p class="mt-5 mb-3 text-muted">&copy; Rizkyakhid</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      regName: '',
      regEmail: '',
      regPassword: ''
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    toHome () {
      this.$router.push('/')
    },
    register () {
      const regData = {
        name: this.regName,
        email: this.regEmail,
        password: this.regPassword
      }
      this.$store
        .dispatch('register', regData)
        .then(() => {
          this.toHome()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
