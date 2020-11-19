<template>
  <div class="container">
    <h1>Categories</h1>
    <div class="row">
      <ProductCategoryCard
        v-for="category in productCategories"
        :key="category.id"
        :category="category"
        class="col-3"
      />
    </div>
  </div>
</template>

<script>
import ProductCategoryCard from './ProductCategoryCard'
export default {
  name: 'ProductCategories',
  components: {
    ProductCategoryCard,
  },
  computed: {
    productCategories() {
      return this.$store.state.productCategories
    },
  },
}
</script>

<style></style>
