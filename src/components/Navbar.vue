<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
         <li class="nav-item" v-if="this.$route.name === 'Home' || this.$route.name === 'Carts'">
         <router-link class="nav-link" to="/">Dashboard</router-link>
        </li>
        <li class="nav-item" v-if="this.$route.name === 'Home' || this.$route.name === 'Carts'">
          <router-link class="nav-link" to="/carts">Cart</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active" v-if="this.$route.name !== 'Home' && this.$route.name !== 'Carts'">
             <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item active" v-if="this.$route.name !== 'Home' && this.$route.name !== 'Carts'">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
           <li class="nav-item" v-if="this.$route.name === 'Home' || this.$route.name === 'Carts'">
            <div class="nav-link" type="button" @click.prevent="logout">Logout</div>
          </li>
        </ul>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      console.log('xxx')
      localStorage.clear()
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style>
</style>
