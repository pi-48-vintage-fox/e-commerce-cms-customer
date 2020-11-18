<template>
  <div class="carts">
    <h1 class="container my-3 display-3 col-3">Carts</h1>
    <div class="container">
      <div class="row mt-3">
        <div class="col-4 mb-4" v-for="cart in carts" :key="cart.id">
          <div class="card h-100 bg-dark text-primary">
            <CartsCard :cart="cart"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartsCard from "../components/CartsCard";
export default {
  name: "Carts",
  components: {
    CartsCard
  },
  created() {
    this.$store.dispatch("fetchCarts");
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
  },
};
</script>
<style>
</style>