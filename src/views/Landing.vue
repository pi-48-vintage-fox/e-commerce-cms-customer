<template>
  <div class="landing">
    <div class="uk-section">
      <div class="uk-container">
        <div class="uk-position-center login-card">
          <!-- Login Section -->
          <div class="uk-card uk-card-default uk-card-body uk-animation-fade" v-show="section === 'login'">
            <h1 class="uk-text-lead">Login</h1>
            <form @submit.prevent="login">
              <label class="uk-form-label">Email: </label>
              <div class="uk-form-controls">
                <input v-model="loginPayload.email" type="text" class="uk-input" placeholder="Email" />
              </div>
              <label class="uk-form-label">Password: </label>
              <div class="uk-form-controls">
                <input v-model="loginPayload.password" type="text" class="uk-input" placeholder="Password" />
              </div>
              <div class="uk-form-controls">
                <button type="submit" class="uk-button uk-button-default">Login</button>
              </div>
            </form>
            <hr>
            Don't have any account ? <a href="#" @click.prevent="toRegister">Register now</a>
          </div>

          <!-- Register Section -->
          <div class="uk-card uk-card-default uk-card-body uk-animation-fade" v-show="section === 'register'">
            <h1 class="uk-text-lead">Register</h1>
            <form @submit.prevent="register">
              <label class="uk-form-label">First Name: </label>
              <div class="uk-form-controls">
                <input v-model="registerPayload.first_name" type="text" class="uk-input" placeholder="First Name" />
              </div>
              <label class="uk-form-label">Last Name: </label>
              <div class="uk-form-controls">
                <input v-model="registerPayload.last_name" type="text" class="uk-input" placeholder="Last Name" />
              </div>
              <label class="uk-form-label">Gender: </label>
              <div class="uk-form-controls">
                <select v-model="registerPayload.gender" class="uk-select" placeholder="Gender">
                  <option value="Any">Any</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
              </select>
              </div>
              <label class="uk-form-label">Email: </label>
              <div class="uk-form-controls">
                <input v-model="registerPayload.email" type="text" class="uk-input" placeholder="Email" />
              </div>
              <label class="uk-form-label">Password: </label>
              <div class="uk-form-controls">
                <input v-model="registerPayload.password" type="text" class="uk-input" placeholder="Password" />
              </div>
              <div class="uk-form-controls">
                <div class="buttons">
                  <button type="submit" class="uk-button uk-button-default">Register</button>
                  <button class="uk-button uk-button-danger" @click="toLogin">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      loginPayload: {
        email: '',
        password: ''
      },
      registerPayload: {
        first_name: '',
        last_name: '',
        gender: 'Any',
        email: '',
        password: ''
      },
      section: 'login'
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.loginPayload)
    },
    toRegister () {
      this.section = 'register'
    },
    toLogin () {
      this.section = 'login'
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 50px;
}

.login-card {
  width: 30rem;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
}

.uk-button {
  font-family: 'Alfa Slab One', cursive;
}

.uk-button-default {
  background-color: black;
  color: white;
}

.uk-button-default:hover {
  transition: 300ms;
  background-color: #ff9966;
  color: black;
}

.uk-card {
  height: auto;
}

.uk-form-controls {
  margin-bottom: 2em;
}

.uk-input {
  width: 70%;
}

.uk-select {
  width: 70%;
}

.uk-text-lead {
  font-family: 'Alfa Slab One', cursive;
  font-size: 4em;
}
</style>
