<template>
  <div id="app">
      <b-navbar toggleable="lg" type="dark" variant="primary" sticky>
        <b-navbar-brand to="/" class="font-weight-bold"><b-icon icon="shop"></b-icon> E-Komers</b-navbar-brand>

        <b-navbar-nav v-if="(!$store.state.isLogin)" class="ml-auto" >
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item to="/register">Register</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav v-else class="ml-auto">
          <b-nav-item to="/history"><b-icon icon="clock-history" aria-hidden="true"></b-icon> Transaction History</b-nav-item>
          <b-button @click="cart" variant="dark" class="mx-2"><b-icon icon="cart3" aria-hidden="true"></b-icon> Cart</b-button>
          <b-button @click="logout" variant="danger" class="mx-2"><b-icon icon="power" aria-hidden="true"></b-icon> Logout</b-button>
          <b-nav-text class="text-light ml-2">Welcome, {{$store.state.currentUser}}</b-nav-text>
        </b-navbar-nav>
      </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.currentUser = ''
      this.$store.commit('LOG_OUT')
      this.$router.push('/login')
    },
    cart () {
      this.$router.push('/carts')
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('LOG_IN')
    } else {
      this.$store.commit('LOG_OUT')
    }
  }
}
</script>

<style>
</style>
