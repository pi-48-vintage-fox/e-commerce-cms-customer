<template>
  <div class="category-list">
      <li class="list-group-item"> <a href="" @click.prevent="filterProduct(category.name)">{{ category.name }}</a></li>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  props: ['category'],
  methods: {
    filterProduct (category) {
      console.log(category)
      this.$store.getters.categoryFilter(category)
    }
  }
}
</script>

<style scoped>
  .category-list{
    width: 100px;
  }
  .list-group-item {
    border: none;
  }
</style>
