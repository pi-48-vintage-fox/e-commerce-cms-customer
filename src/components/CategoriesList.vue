<template>
      <li class="list-group-item"> <a href="" @click.prevent="filterProduct(category.name)">{{ category.name }}</a></li>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Categories',
  props: ['category'],
  data () {
    return {
      filter: []
    }
  },
  methods: {
    filterProduct (category) {
      this.$store.state.products = this.categoryFilter(category)
    }
  },
  computed: {
    ...mapGetters([
      'categoryFilter'
    ])
  },
  created () {
    this.categoryFilter()
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
