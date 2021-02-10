<template>
  <div id="auth-content">
    <div id="auth-title">Create Account</div>
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
      <form id="registerForm" @submit.prevent="submitRegisterForm">
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.email.$error }"
        >
          <label class="form__label" for="user">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            v-model.trim="email"
            placeholder="Insert your email"
            class="form-control"
            @change="$v.email.$touch"
          />
          <small
            class="text-danger"
            v-if="$v.email.$dirty && !$v.email.required"
            >Email is required</small
          >
          <small class="text-danger" v-if="!$v.email.email"
            >Email format is not valid</small
          >
          <small class="text-danger" v-if="!isUnique"
            >Email is already registered</small
          >
        </div>

        <div
          class="form-group"
          :class="{ 'form-group--error': $v.password.$error }"
        >
          <label class="form__label" for="password">Password</label>
          <input
            class="form-control"
            :class="{ 'is-invalid': $v.password.$error }"
            type="password"
            name="password"
            id="password"
            placeholder="Insert your password"
            v-model="$v.password.$model"
            @change="$v.password.$touch"
          />
          <small class="text-danger" v-if="$v.password.$error">
            Password is required
          </small>
        </div>

        <div
          class="form-group"
          :class="{ 'form-group--error': $v.confirmPassword.$error }"
        >
          <label class="form__label" for="confirmPassword"
            >Confirm Password</label
          >
          <input
            class="form-control"
            :class="{ 'is-invalid': $v.confirmPassword.$error }"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re-type your password"
            v-model="$v.confirmPassword.$model"
          />
          <small class="text-danger" v-if="$v.confirmPassword.$error">
            Passwords do not match
          </small>
        </div>

        <div class="actions">
          <button class="btn btn-primary btn-block mt-3 mb-2">
            Create Account
          </button>
        </div>
        <p class="mb-3">
          I want to
          <router-link to="/login" id="link-login">
            login to my account
          </router-link>
        </p>
        <!-- <div class="alert alert-success" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </div> -->
        <div class="alert alert-danger" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </div>
        <!-- <div class="alert alert-info" v-if="submitStatus === 'PENDING'">
          Sending...
        </div> -->
      </form>
    </div>
  </div>
</template>

<script>
import axios from '../../config/axios'
import { required, email, sameAs } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      submitStatus: '',
      isUnique: true,
      errors: {
        email: [],
        password: [],
        confirmPassword: [],
      },
      errorBanner: null,
    }
  },
  mounted() {
    this.renderGoogleButton()
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
    confirmPassword: {
      sameAs: sameAs('password'),
    },
  },

  methods: {
    submitRegisterForm() {
      const { email, password, confirmPassword, errors } = this

      console.log('submit register form')

      console.log({
        email,
        password,
        confirmPassword,
        errors,
      })

      axios({
        method: 'POST',
        url: '/checkemail',
        data: { email },
      })
        .then(({ data }) => {
          if (data.msg !== 'unique') {
            this.isUnique = false
          } else {
            this.$v.$touch()
            if (this.$v.$invalid) {
              this.submitStatus = 'ERROR'
            } else {
              this.submitStatus = 'PENDING'
              this.$store
                .dispatch('submitRegistration', { email, password })
                .then(({ data }) => {
                  this.submitStatus = 'OK'
                  console.log('berhasil register', data)
                  this.$router.push('/login')
                  this.$vToastify.success('Account registration was successful')
                  this.email = ''
                  this.password = ''
                  this.confirmPassword = ''
                  this.errors = {
                    email: [],
                    password: [],
                    confirmPassword: [],
                  }
                })
                .catch(err => {
                  console.log(err.response.data)
                  if (err.response.data.status == 409) {
                    this.errors.email.push(
                      'Email address is already registered'
                    )
                  }
                })
            }
          }
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    toggleLoginForm() {
      this.$emit('toggleLoginForm')
    },
    renderGoogleButton() {
      // eslint-disable-next-line no-undef
      if (!gapi) return
      // eslint-disable-next-line no-undef
      gapi.signin2.render('gSignIn', {
        onsuccess: user => {
          this.onSignIn(user)
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
