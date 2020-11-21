<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" @click.prevent="toHome">Home</a>
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
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" @click.prevent="myCart">My Cart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
    myChart() {
      this.$router.push({ path: "/cart" });
    },
    toHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
