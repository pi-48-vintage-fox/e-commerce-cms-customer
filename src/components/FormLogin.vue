<template>
  <div id="auth-content">
    <div id="auth-title">Login</div>

    <div id="auth-oauth">
      <div id="gSignIn" class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
    <div id="auth-form">
      <form id="loginForm" @submit.prevent="submitLoginForm">
        <div v-if="errorBanner" class="alert alert-danger">
          {{ errorBanner }}
        </div>
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          v-model="email"
          placeholder="Insert your email"
          autofocus
        />
        <small v-if="errors.email.length > 0" class="text-danger">
          <ul>
            <li v-for="(error, i) in errors.email" :key="i">
              <p class="message">{{ error }}</p>
            </li>
          </ul>
        </small>

        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          placeholder="Insert your password"
        />
        <small v-if="errors.password.length > 0" class="text-danger">
          <ul>
            <li v-for="(error, i) in errors.password" :key="i">
              <p class="message">{{ error }}</p>
            </li>
          </ul>
        </small>

        <button class="btn btn-primary mt-3 mb-2">
          Log In
        </button>
        <p>
          I want to
          <router-link to="/register" id="link-register">
            create an account
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormLogin',

  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: [],
        password: [],
      },
      errorBanner: null,
    }
  },
  mounted() {
    this.renderGoogleButton()
  },
  methods: {
    submitLoginForm() {
      if (this.validateLogin()) {
        for (let key in this.errors) {
          this.errors[key] = []
        }

        this.$store
          .dispatch('submitLoginForm', {
            email: this.email,
            password: this.password,
          })
          .then(({ data }) => {
            console.log('berhasil login', data)
            this.errors = {
              email: [],
              password: [],
            }
            this.errorBanner = null
            if (data.access_token) {
              localStorage.setItem('access_token', data.access_token)
            }

            this.$store.commit('SET_USER', data)
            this.$store.commit('SET_IS_LOGGED_IN', true)

            this.$router.push('/')
          })
          .catch(err => {
            console.log(err.response.data)
            this.$store.commit('SET_IS_LOGGED_IN', false)

            this.errorBanner = err.response.data.msg
          })
          .finally(() => {
            this.email = null
            this.password = null
          })
      }
    },
    validateLogin() {
      for (let key in this.errors) {
        this.errors[key] = []
      }
      console.log('validating login form')
      if (!this.email) {
        this.errors.email.push('Email address is required')
      }
      if (!this.password) {
        this.errors.password.push('Password is required')
      }
      console.log('errors:', JSON.stringify(this.errors, null, 2))

      for (let key in this.errors) {
        if (this.errors[key].length > 0) {
          console.log('validation pass fail')
          return false
        }
      }

      console.log('validation pass success')

      return true
    },
    renderGoogleButton() {
      // eslint-disable-next-line no-undef
      if (!gapi) return
      // eslint-disable-next-line no-undef
      gapi.signin2.render('gSignIn', {
        onsuccess: user => {
          // this.onSignIn(user)
          this.$store.dispatch('onSignIn', user)
        },
        onerror: err => {
          console.log('Google signIn2.render button err: ' + err)
        },
      })
    },
    onSignIn(user) {
      this.$store.dispatch('onSignIn', user)
    },
  },
}
</script>

<style></style>
