<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <router-link class="navbar-brand text-white" to="/">TokoBimo</router-link>
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
        <li class="nav-item">
          <a
            class="nav-link text-white"
            href="#"
            @click.prevent="fetchCarts"
            tabindex="-1"
            aria-disabled="true"
            >Carts</a
          >
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a
            class="nav-link text-white"
            href="#"
            @click.prevent="login"
            tabindex="-1"
            aria-disabled="true"
            >Login</a
          >
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a
            class="nav-link text-white"
            href="#"
            @click.prevent="logout"
            tabindex="-1"
            aria-disabled="true"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    login(){
      this.$router.push("/login");
    },
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
    fetchCarts() {
      this.$router.push("/carts");
    },
  },
};
</script>

<style>
</style>
