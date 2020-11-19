<template>
  <div class="container" id="login">
        <form @submit.prevent="login">
            <div style="width: 50%; margin: 200px auto;">
              <h1>Login</h1>
                <div class="form-group">
                  <label for="login-email">Email</label>
                  <input type="email" v-model="email" class="form-control" id="login-email" aria-describedby="emailHelp">
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" v-model="password" class="form-control" id="login-password" >
                </div>
                <div class="row">
                  <div class="col">
                    <button type="submit" class="btn btn-primary form-control">LOGIN</button>
                  </div>
                  <div class="col">
                      <router-link to="/register">
                    <button type="submit" class="btn btn-primary form-control">LOGIN</button>
                    </router-link>
                  </div>
                </div>
                <div class="text-center font-weight-bold">
                  <h6>== Another Account ==</h6>
                </div>
            </div>
          </form>
      </div>
</template>

<script>
export default {
  name: 'LoginForm',
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
        .then(() => {
          this.$router.push({ path: '/' })
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
