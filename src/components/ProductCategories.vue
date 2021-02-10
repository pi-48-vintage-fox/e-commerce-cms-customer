<template>
  <div class="container">
    <div class="text-center mb-5 mt-5">
      <h3 class="category-title mb-4">Categories</h3>
      <div
        class="category-items d-flex justify-content-center align-items-center"
      >
        <div
          class="container d-flex flex-column flex-md-row justify-content-md-around align-items-center fullwidth"
        >
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
              selected: selectedCategory === i + 2,
            }"
            @click="handleSelectCategory(i + 1)"
          >
            <h5 class="category-text">
              {{ category.name }}
            </h5>
          </div>
        </div>
        <div class="select-highlight"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import ProductCategoryCard from './ProductCategoryCard'
export default {
  name: 'ProductCategories',
  components: {
    // ProductCategoryCard,
  },
  data() {
    return {
      selectedCategory: '',
    }
  },
  methods: {
    handleSelectCategory(i) {
      let id = i === 0 ? 0 : i + 1
      this.$store.dispatch('fetchProducts', { category: id })
      this.selectedCategory = id

      // let highlight = document.getElementsByClassName('select-highlight')[0]
      // highlight.style.left = -400 + i * 200 + 'px'
    },
  },
  computed: {
    productCategories() {
      return this.$store.state.productCategories
    },
    isFetchingProductCategories() {
      return this.$store.state.isFetchingProductCategories
    },
  },
}
</script>

<style></style>
