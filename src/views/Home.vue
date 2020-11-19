<template>
  <div class="home">
    <Navbar/>
    <div class="mt-5"></div>
    <Products/>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '../components/Products'
import Navbar from '../components/Navbar'
export default {
  name: 'Home',
  components: {
    Products, Navbar
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }

}
</script>
