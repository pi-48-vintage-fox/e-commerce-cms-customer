<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <h2 class="is-size-3 brand-text">ELOOK</h2>
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            HOME
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <i class="fas fa-heart mr-2"></i>
            <p class="is-size-6 coret">Wishlist</p>
          </div>
          <div class="navbar-item">
            <tippy trigger='click' :interactive=true theme='light bordered' :maxWidth=500>
              <template v-slot:trigger>
                <div class="navbar-item" style="cursor:pointer">
                  <i class="fas fa-shopping-bag mr-2"></i>
                  <p class="is-size-6">My cart</p>
                </div>
              </template>
              <div class="cart">
                <div class="not-logged-in" v-if="!isLoggedIn">
                  <p>It seems you are not logged in yet</p>
                  <login-card ></login-card>
                </div>
                <cart v-else></cart>
              </div>
            </tippy>
          </div>
          <div class="navbar-item">
            <a href="#" @click.prevent='logout' class="navbar-item" v-if="isLoggedIn">Log out</a>
          </div>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
import Cart from './Cart.vue'
import LoginCard from './LoginCard.vue'
export default {
  components: {
    LoginCard,
    Cart
  },
  data () {
    return {
      trigger: false,
      login: false
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('SET_LOGOUT')
    }
  }
}
</script>

<style>

</style>
