<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">OlSHOP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li v-if="role === 'admin'" class="nav-item">
              <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
            </li>
          </ul>
          <span class="ml-auto">
            <ul class="navbar-nav mr-sm-2">
              <li v-if="!access_token" class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
              </li>
              <li v-if="access_token" class="nav-item">
                <a href="/" @click="logout" class="nav-link">Logout</a>
              </li>
              <li v-if="role === 'customer'" class="nav-item">
                <router-link to="/cart"  class="nav-link"><i class="fas fa-shopping-cart"></i><span v-if="carts.length > 0" class="total-cart">{{ carts.length }}</span></router-link>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      access_token: localStorage.getItem('access_token'),
      role: localStorage.getItem('role')
    }
  },
  methods: {
    logout () {
      localStorage.clear()
    },
    fetchCart () {
      this.$store.dispatch('fetchCart')
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    if (this.access_token) {
      this.fetchCart()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
    text-decoration: none !important;
}

.total-cart {
  padding: 5px;
  color:#c0392b;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 1000;
  position: absolute;
  top: 3px;
  margin-left: -9px;
}

.fa-shopping-cart {
  color:#7f8c8d;
}
</style>
