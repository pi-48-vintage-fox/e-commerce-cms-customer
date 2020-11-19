<template>
  <div>
      <b-navbar toggleable="lg" type="light" variant="info" class="nav-bar">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="navbar-link">
            <b-nav-item href="#">Link</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button variant="outline" @click="$router.push('/carts')">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-cart4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                ></path>
              </svg>
            </b-button>
            <b-nav-item-dropdown right v-if="isLogin">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>{{username}}</em>
              </template>
              <b-dropdown-item href="#">Wish List</b-dropdown-item>
              <b-dropdown-item href="#" @click.prevent="signOut">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <div v-if="!isLogin">
              <b-button variant="outline-dark" class="button" @click="() => { $router.push('/login') }">Masuk</b-button>
              <b-button variant="dark" @click="() => { $router.push('/register')}">Daftar</b-button>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data () {
    return {
      isLogin: false,
      username: localStorage.username
    }
  },
  methods: {
    signOut () {
      localStorage.removeItem('access_token')
      localStorage.removeItem('username')
      this.isLogin = false
      this.$router.push('/login')
    }
  },
  created () {
    const token = localStorage.access_token
    if (token) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }
}
</script>
<style>
.button {
  margin-right: 10px;
}
</style>
<style scoped>
 .nav-bar{
    height: 100px;
    background-color: #ffffff!important;
 }
</style>
