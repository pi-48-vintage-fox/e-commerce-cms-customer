<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#" @click.prevent="backHome">
      <img src="@/assets/logo-web.svg" width="30" height="30" alt="">
      nCommerce
    </a>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" v-if="!access_token">
        <a class="nav-link" href="#" @click.prevent="toRegister"
          >Register</a
        >
      </li>
      <li class="nav-item" v-if="!access_token">
        <a class="nav-link" href="#" @click.prevent="toLogin"
          >Login</a
        >
      </li>
      <li class="nav-item" v-if="access_token">
        <a class="nav-link" href="#"
          >Cart</a
        >
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <a
        v-if="access_token"
        href="#"
        class="btn btn-danger my-2 my-sm-0"
        @click.prevent="logout"
        >Log out</a
      >
    </form>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      access_token: localStorage.access_token
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    },
    toLogin () {
      this.$router.push('/login')
    },
    logout () {
      localStorage.clear()
      this.toLogin()
    }
  }
}
</script>

<style>
</style>
