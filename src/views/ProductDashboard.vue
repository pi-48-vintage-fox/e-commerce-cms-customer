<template>
  <div class="list-product mt-5">
    <button type="button" class="btn btn-primary mt-5" data-toggle="modal" data-target=".bd-example-modal-lg">Add Product</button>
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <form @submit.prevent="addProduct">
                <div class="form-group">
                  <label for="">Name</label>
                  <input v-model="newProduct.name" type="text" class="form-control">
                </div>
                <div class="form-group">
                  <label for="">Image URL</label>
                  <input v-model="newProduct.image_url" type="text" class="form-control">
                </div>
                <div class="form-group">
                  <label for="">Price</label>
                  <input v-model="newProduct.price" type="number" class="form-control">
                </div>
                <div class="form-group">
                  <label for="">Stock</label>
                  <input v-model="newProduct.stock" type="number" class="form-control">
                </div>
                <div class="form-group">
                  <label for="">Category</label>
                  <select v-model="newProduct.CategoryId" class="form-control" id="exampleFormControlSelect1">
                    <option value="">-- Select category --</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    <table class="table table-bordered table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nama</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Category</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <ProductList
          v-for="product in products" :key="product.id"
          :product="product"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
export default {
  name: 'ProductDashboard',
  data () {
    return {
      newProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: '',
        CategoryId: ''
      }
    }
  },
  components: {
    ProductList
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    addProduct () {
      const addNewProduct = this.newProduct
      this.$store.dispatch('addProduct', addNewProduct)
        .then(({ data }) => {
          location.reload()
        })
        .catch(console.log)
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.fetchProducts()
    this.fetchCategories()
  }
}
</script>

<style scoped>
  .list-product {
    margin-top: 133px;
  }
</style>
