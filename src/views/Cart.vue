<template>
<div>
  <Navbar/>
  <CartList :carts="carts"/>
</div>
</template>

<script>

import Navbar from '../components/Navbar'
import CartList from '../components/CartList'
export default {
  name: 'cart',
  components: {
    Navbar,
    CartList
  },
  computed: {
    carts () {
      return this.$store.state.fetchCart
    }
  },
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style>

</style>
