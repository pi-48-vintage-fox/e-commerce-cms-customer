<template>
  <div id="auth-content">
    <div id="auth-title">Login</div>
    <div
      v-if="errorBanner"
      class="notification notification-banner notification-error"
    >
      {{ errorBanner }}
    </div>
    <div id="auth-oauth">
      <div id="gSignIn" class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
    <div id="auth-form">
      <form id="loginForm" @submit.prevent="submitLoginForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            v-model="email"
            placeholder="Insert your email"
            autofocus
          />
          <!-- <div
          v-if="errors.user.length > 0"
          class="notification notification-error"
        >
          <ul>
            <li v-for="(error, i) in errors.user" :key="i">
              {{ error }}
            </li>
          </ul>
        </div> -->
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            placeholder="Insert your password"
          />
          <!-- <div
          v-if="errors.password.length > 0"
          class="notification notification-error"
        >
          <ul>
            <li v-for="(error, i) in errors.password" :key="i">
              {{ error }}
            </li>
          </ul>
        </div> -->
        </div>

        <div class="actions">
          <button class="button button-secondary">
            Log In
          </button>
        </div>
        <p>
          I want to
          <a
            id="link-register"
            @click="this.$router.push('/register')"
            href="javascript:void(0)"
          >
            create an account
          </a>
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

        this.$store.dispatch('submitLoginForm', {
          email: this.email,
          password: this.password,
        })
        this.email = null
        this.password = null
        this.errors = {
          email: [],
          password: [],
        }
        this.errorBanner = null
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
      if (!gapi) return
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
