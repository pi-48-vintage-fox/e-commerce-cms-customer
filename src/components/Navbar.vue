<template>
  <nav class="navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand font-weight-bold" href="#" @click.prevent="home">Plantopedia</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="home">Home</a>
      </li>
      <li class="nav-item" v-show="!navbarShow">
        <a class="nav-link" href="#" @click.prevent="register">Register</a>
      </li>
      <li class="nav-item" v-show="!navbarShow">
        <a class="nav-link" href="#" @click.prevent="login">Login</a>
      </li>
      <li class="nav-item" v-show="navbarShow">
        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" @click.prevent="cart">Cart</a>
      </li>
      <li class="nav-item" v-show="navbarShow">
        <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
      </li>
    </ul>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      navbarShow: localStorage.access_token
    }
  },
  methods: {
    login () {
      this.navbarShow = !localStorage.access_token
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    },
    home () {
      this.$router.push('/')
    },
    cart () {
      this.$router.push('/cart')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/')
      this.navbarShow = localStorage.access_token
    }
  }
}
</script>

<style>

</style>
