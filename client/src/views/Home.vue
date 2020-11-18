<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="container d-flex justify-content-around my-3">
      <div class="row">
        <ProductList
          v-for="product in $store.state.products"
          :key="product.id"
          :product="product"
        ></ProductList>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import ProductList from '@/components/ProductList.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    ProductList
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>
