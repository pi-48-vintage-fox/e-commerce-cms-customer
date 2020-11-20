<template>
  <div class="container text-center mb-5 mt-5">
    <h3 class="category-title mb-4">Categories</h3>
    <div class="category-items row justify-content-around">
      <div
        class="click flex-fill py-3"
        :class="{
          selected: selectedCategory === 0,
        }"
        @click="handleSelectCategory(0)"
      >
        <h5 class="category-text">
          All
        </h5>
      </div>
      <div
        v-for="(category, i) in productCategories"
        :key="category.id"
        class="click flex-fill py-3"
        :class="{
          selected: selectedCategory === i + 2,
        }"
        @click="handleSelectCategory(i + 2)"
      >
        <h5 class="category-text">
          {{ category.name }}
        </h5>
      </div>
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
  data() {
    return {
      selectedCategory: '',
    }
  },
  methods: {
    handleSelectCategory(id) {
      this.selectedCategory = id
      this.$store.dispatch('fetchProducts', { category: id })
    },
  },
  computed: {
    productCategories() {
      return this.$store.state.productCategories
    },
  },
}
</script>

<style></style>
