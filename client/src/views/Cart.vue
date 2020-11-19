<template>
  <div id="Cart">
    <Navbar></Navbar>
    <div class="container">
      <h2 class="text-left my-2">My Cart</h2>
      <h3 v-if="$store.state.carts.length === 0" class="text-left">Oops.. Nothing here. Please add items from homepage!</h3>
      <CartList
        class="my-2"
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
