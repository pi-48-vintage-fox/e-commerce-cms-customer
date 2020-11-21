<template>
  <div class="container text-center mb-5 mt-5">
    <h3 class="category-title mb-4">Categories</h3>
    <div class="category-items row justify-content-center">
      <div
        class="category-item click py-3"
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
        class="category-item click py-3"
        :class="{
          selected: selectedCategory === i + 1,
        }"
        @click="handleSelectCategory(i + 1)"
      >
        <h5 class="category-text">
          {{ category.name }}
        </h5>
      </div>
      <div class="select-highlight"></div>
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
    handleSelectCategory(i) {
      let id = i === 0 ? 0 : i + 1
      this.selectedCategory = id
      this.$store.dispatch('fetchProducts', { category: id })
      document.getElementsByClassName('select-highlight')[0].style.left =
        -400 + i * 200 + 'px'
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
