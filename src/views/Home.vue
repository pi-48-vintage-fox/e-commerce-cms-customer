<template>
  <div>
    <Navbar/>
    <Product :products="products"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Product from '../components/ProductList'
export default {
  name: 'Home',
  components: {
    Navbar,
    Product
  },
  computed: {
    products () {
      return this.$store.state.fetchProduct
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>
