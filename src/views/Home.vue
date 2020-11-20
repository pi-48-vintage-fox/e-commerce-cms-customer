<template>
  <div>
    <Banner />
    <ProductCategories />
    <ProductList class="mt-3" />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import ProductCategories from '../components/ProductCategories'
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
