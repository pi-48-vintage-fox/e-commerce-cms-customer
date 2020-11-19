<template>
  <div>
    <Banner />
    <!-- <ProductCategories /> -->
    <ProductList />
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
  created() {
    // this.$store.dispatch('fetchProducts')
    // this.$store.dispatch('fetchProductCategories')
    // this.$store.dispatch('fetchBanners')
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('fetchUserDetails')
      this.$store.dispatch('fetchCart')
    }
  },
}
</script>
