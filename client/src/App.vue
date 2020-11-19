<template>
  <div id="app">
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" @click.prevent="home" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item ">
        <a v-if="$store.state.emailIsLogin"  class="nav-link" @click.prevent="cart" href="#">Cart</a>
      </li>
      <li class="nav-item ">
        <a v-if="$store.state.emailIsLogin === '' " @click.prevent="login" class="nav-link" href="#">login</a>
      </li>
      <li class="nav-item dropdown">
        <a v-if="$store.state.emailIsLogin" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         {{ $store.state.emailIsLogin }}
        </a>
        <div v-if="$store.state.emailIsLogin" class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <div class="dropdown-divider"></div>
          <a  class="dropdown-item" @click.prevent="logout" href="#">Logout</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    home () {
      this.$router.push('/')
    },
    cart () {
      this.$router.push('/cart')
    },
    logout () {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Logout successfuly',
        showConfirmButton: false,
        timer: 1500
      })
      localStorage.clear()
      this.$store.commit('SET_EMAILISLOGIN', '')
    },
    login () {
      this.$router.push('/login')
    }
  },
  created () {
  }
}
</script>

<style>
#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
