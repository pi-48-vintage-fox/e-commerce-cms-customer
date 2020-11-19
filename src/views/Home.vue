<template>
  <div class="container d-flex flex-wrap mt-5">
    <ProductComponent v-for="product in $store.state.products" :key="product.id" :product="product" />
    <!-- DS -->
  </div>
</template>

<script>
import ProductComponent from '@/components/ProductComponent.vue'
export default {
  name: 'Home',
  components: {
    ProductComponent
  },
  created () {
    this.$store.dispatch('fetchProducts')
    if (localStorage.access_token) {
      this.$store.commit('LOG_IN')
    }
  }
}
</script>
