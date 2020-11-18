<template>
  <div class="all-products col-10 content uk-animation-fade">
    <Product
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import Product from './Product'
export default {
  name: 'AllProducts',
  computed: {
    products () {
      const activeProducts = this.$store.state.products.filter(element => element.stock > 0)
      return activeProducts
    }
  },
  components: {
    Product
  }
}
</script>

<style scoped>
.all-products {
  display: flex;
  flex-wrap: wrap;
}
</style>
