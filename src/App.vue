<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img
          src="./assets/logo_gardenbyte_horizontal.png"
          alt="logo"
          height="42px"
        />
      </router-link>
      <div class="d-flex align-items-center justify-content-center">
        <router-link to="/cart" class="mr-4 mt-2">
          <i class="material-icons">shopping_cart</i>
          <span
            v-if="
              isLoggedIn && cart.CartProducts && cart.CartProducts.length > 0
            "
            class="badge badge-pill badge-success"
            >{{ cart.CartProducts.length }}</span
          >
        </router-link>
        <router-link
          v-if="!isLoggedIn"
          to="/login"
          class="btn btn-sm btn-outline-primary text-primary mr-2"
          >Log In</router-link
        >
        <router-link
          v-if="!isLoggedIn"
          to="/register"
          class="btn btn-sm btn-primary text-white mr-2"
          >Register</router-link
        >
        <button
          v-if="isLoggedIn"
          @click="signOut"
          class="btn btn-sm btn-outline-danger"
        >
          Log Out
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {},
  computed: {
    ...mapState(['isLoggedIn', 'cart']),
  },
  created() {
    this.$store.dispatch('fetchUserDetails')
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchBanners')
    this.$store.dispatch('fetchCart')
  },

  methods: {
    signOut() {
      this.$store.dispatch('signOut')
    },
  },
}
</script>

<style>
#app {
  font-family: 'Work Sans', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
