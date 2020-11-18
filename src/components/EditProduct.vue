<template>
  <div class="form-edit-product mt-5">
    <div class="col-4">
      <form @submit.prevent="editProduct">
        <div class="form-group">
          <input type="text" class="form-control" v-model="product.name">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" v-model="product.image_url">
        </div>
        <div class="form-group">
          <input type="number" class="form-control" v-model="product.price">
        </div>
        <div class="form-group">
          <input type="number" class="form-control" v-model="product.stock">
        </div>
        <div class="form-group">
          <select class="form-control" id="exampleFormControlSelect1" v-model="product.CategoryId">
            <ListCategory v-for="category in categories" :key="category.id"
            :category="category"
            :selected="category.id === product.CategoryId"
            />
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import ListCategory from '@/components/ListCategory'
export default {
  name: 'EditProduct',
  components: {
    ListCategory
  },
  methods: {
    getProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('getProductById', id)
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    },
    editProduct () {
      const updatedProduct = this.product
      this.$store.dispatch('editProduct', updatedProduct)
        .then(({ result }) => {
          this.$router.push({ name: 'ProductDashboard' })
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    },
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.getProductById()
    this.fetchCategories()
  }
}
</script>

<style>

</style>
