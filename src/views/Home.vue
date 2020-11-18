<template>
  <div>
    <NavBar />
    <div class="home row">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <ProductForm
        v-for="product in fetchProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import ProductForm from "@/components/ProductForm.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    ProductForm,
  },
  computed: {
    fetchProducts() {
      return this.$store.state.products;
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>
