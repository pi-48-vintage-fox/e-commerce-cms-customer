<template>
  <div class="list-category">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nama</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <CategoryList
          v-for="category in categories" :key="category.id"
          :category="category"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue'
export default {
  name: 'CategoryDashboard',
  components: {
    CategoryList
  },
  methods: {
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.fetchCategories()
  }
}
</script>

<style>
  .list-category {
    margin-top: 133px;
  }
</style>
