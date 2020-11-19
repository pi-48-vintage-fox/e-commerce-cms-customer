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
  created() {},
}
</script>
