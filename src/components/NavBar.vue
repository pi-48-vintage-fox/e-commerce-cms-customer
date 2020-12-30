<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <router-link class="navbar-brand text-white" to="/">TokoBimo</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a
        class="nav-link text-white"
        href="#"
        @click.prevent="fetchCarts"
        tabindex="-1"
        aria-disabled="true"
        >Carts</a
      >
    </div>
    <div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a
          class="nav-link text-white"
          href="#"
          @click.prevent="logout"
          tabindex="-1"
          aria-disabled="true"
          >Logout</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    login () {
      this.$router.push('/login')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    fetchCarts () {
      this.$router.push('/carts')
    }
  }
}
</script>

<style>
</style>
