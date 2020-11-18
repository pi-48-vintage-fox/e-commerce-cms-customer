<template>
  <div id="app" class="uk-background">
    <div id="nav" class="uk-background-secondary uk-light uk-panel">
      <router-link class="nav-links" to="/">WatdeCom</router-link>
      <router-link v-if="!logged" class="nav-links" to="/landing">Login</router-link>
      <a href="#" v-else-if="logged" class="nav-links logout" @click.prevent="logout">Logout</a>
    </div>
    <router-view/>
    <footer class="footer uk-card uk-card-default uk-card-body uk-padding-small uk-background-secondary uk-light">
      <p class="uk-text-center">© 2020 Musa Bagja. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('LOGIN', false)
      this.$store.commit('RETURN_WISHLIST', '')
    }
  },
  computed: {
    logged () {
      return this.$store.state.logged
    }
  },
  created () {
    this.$store.dispatch('getCategories')
    if (localStorage.getItem('token')) {
      this.$store.commit('LOGIN', true)
      this.$store.dispatch('getWishlist')
      this.$store.dispatch('getCart')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  font-family: 'Alfa Slab One', cursive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
}

#nav a {
  text-decoration: none;
  color: #f8f9fa;
  font-size: 50px;
  margin: 0px 20px;
}

#nav a:hover {
  color: #ff9966;
  transition: 300ms;
}

.logout:hover {
  color: #dc3545 !important;
}
</style>
