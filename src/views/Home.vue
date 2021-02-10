<template>
  <div>
    <div
      v-if="isFetchingBanners"
      class="row justify-content-center align-items-center mb-5 mt-5"
      style="height:300px"
    >
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <Banner v-else />
    <div
      v-if="isFetchingProductCategories"
      class="row justify-content-center align-items-center mb-5 mt-5"
      style="height:132px"
    >
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <ProductCategories v-else />
    <div
      v-if="isFetchingProducts"
      class="row justify-content-center align-items-center"
      style="height:400px"
    >
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <ProductList v-else class="mt-3" />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import ProductCategories from '../components/ProductCategories'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    Banner,
    ProductList,
    ProductCategories,
  },
  methods: {
    fetchCart() {
      this.$store.dispatch('fetchCart')
    },
  },
  computed: {
    ...mapState([
      'isFetchingProductCategories',
      'isFetchingProducts',
      'isFetchingBanners',
    ]),
  },
  created() {
    // this.$store.dispatch('fetchProducts')
    // this.$store.dispatch('fetchProductCategories')
    // this.$store.dispatch('fetchBanners')
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('fetchUserDetails')
      this.$store.dispatch('fetchCart')
      // this.$store.dispatch('fetchCartItems')
    }
  },
}
</script>
