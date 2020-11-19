<template>
  <div class="home">
      <HomeNavbar></HomeNavbar>
   <div class="container">
      <div class="row">
        <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '../components/ProductCard'
import HomeNavbar from '../components/HomeNavbar'

export default {
  name: 'Home',
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  components: {
    ProductCard,
    HomeNavbar
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    // this.fetchProducts()
    this.$store.dispatch('fetchProducts')
  }
}
</script>
