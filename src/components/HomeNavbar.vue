<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand text-white" href="#">BAYES.ID</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-white" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link text-white" href="#" @click.prevent="toHome"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item text-white">
          <router-link to="/login" v-if="!$store.state.token" class="nav-link text-white" >Login</router-link>
        </li>
        <li class="nav-item text-white">
          <a class="nav-link text-white" @click.prevent="showYourCart" v-if="$store.state.token" >Show Carts</a>
        </li>
        <li class="nav-item text-white">
          <a class="nav-link text-white" href="#" @click.prevent="logout" v-if="$store.state.token">Logout</a>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarHome',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    },
    toHome () {
      this.$router.push('/')
    },
    showYourCart () {
      this.$router.push('/carts')
    }
  }
}
</script>

<style></style>
