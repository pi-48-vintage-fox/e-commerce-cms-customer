<template>
  <div class="home">
    <h1 class="container my-3 display-3 col-3">Products</h1>
    <div class="container">
      <div class="row mt-3">
        <div class="col-4 mb-4" v-for="product in products"
            :key="product.id">
           <div class="card h-100 bg-dark text-primary" >
          <ProductsCard
            :product="product"
          ></ProductsCard>
        </div>
      </div></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductsCard from "../components/ProductsCard";
export default {
  name: "Home",
  components: {
    ProductsCard,
  },
  created() {
    this.$store.dispatch("fetchProducts");
    // this.$store.commit('FETCH_PRODUCT', product)
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
