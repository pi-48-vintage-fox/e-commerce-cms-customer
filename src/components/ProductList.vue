<template>
  <div>
    <div class="container" style="min-height: 400px">
      <div class="row justify-content-center align-items-center">
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
