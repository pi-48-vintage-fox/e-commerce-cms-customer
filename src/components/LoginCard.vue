<template>
  <div>
    <div class="field">
      <div class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="Email" v-model="login.email">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
      </div>
    </div>
    <div class="field">
      <div class="control has-icons-left">
        <input class="input is-small" type="password" placeholder="Password" v-model="login.password">
          <span class="icon is-small is-left">
            <i class="fas fa-asterisk"></i>
          </span>
      </div>
    </div>
    <div class="field">
      <button class="button is-small" @click.prevent="loginUser">Sign in</button>
    </div>
    <div class="field">
      <p class="is-size-7">Need account ?
        <a @click.prevent='openModal'> Register </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginCard',
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    openModal () {
      this.$events.emit('registerModalOpen')
    },
    loginUser () {
      const payload = {
        email: this.login.email,
        password: this.login.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>

</style>
