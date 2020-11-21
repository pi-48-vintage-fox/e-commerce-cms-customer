<template>
  <div>
    <div class="container">
      <div
        v-if="isFetchingProducts"
        class="row justify-content-center align-items center"
        style="height:500px"
      >
        <h2>Loading...</h2>
      </div>
      <div v-else class="row justify-content-center align-items-center">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
export default {
  name: 'ProductList',
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    isFetchingProducts() {
      return this.$store.state.isFetchingProducts
    },
  },
}
</script>

<style></style>
