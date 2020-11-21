<template>
  <div>
    <div class="container" style="min-height: 400px">
      <div
        v-if="isFetchingProducts"
        class="row justify-content-center align-items-center"
        style="height:300px"
      >
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
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
