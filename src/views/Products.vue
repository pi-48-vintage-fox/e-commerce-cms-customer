<template>
    <div>
      <Banner :filterBanner="filterBanner"/>
      <div class="container mt-5" style="margin: 5% 10%">
        <div class="row row-cols-5" style="display: flex; flex-wrap: wrap; justify-content: flex-start;">
            <ProductCard v-for="product in $store.state.products" :key="product.id" :product="product"/>
        </div>
      </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import Banner from '../components/Banner'
export default {
  name: 'Products',
  components: {
    ProductCard,
    Banner
  },
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchBanners')
  },
  computed: {
    filterBanner () {
      return this.$store.state.banners.filter(el => el.status === 'active')
    }
  }
}
</script>

<style>

</style>
