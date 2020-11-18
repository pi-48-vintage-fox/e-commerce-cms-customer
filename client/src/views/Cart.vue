<template>
  <div id="Cart">
    <Navbar></Navbar>
    <div class="container">
      <CartList
        class="my-3"
        v-for="cart in $store.state.carts"
        :key="cart.id"
        :cart="cart"
      ></CartList>
    </div>
  </div>
</template>

<script>
import CartList from '@/components/CartList.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Cart',
  components: {
    CartList,
    Navbar
  },
  methods: {
  },
  created () {
    this.$store.dispatch('showCart')
  }
}
</script>

<style>
</style>
