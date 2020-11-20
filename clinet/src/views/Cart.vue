<template>
  <div>
    <Navbar />
    <div class="top">
      <p><span>Your Cart</span></p>
      <div class="jumbotron jumbotron-fluid bg-transparent pt-1">
        <div class="container mt-0">
          <ListCart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import ListCart from "../components/ListCart";
export default {
  name: "Carts",
  components: {
    Navbar,
    ListCart,
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
  },
  created() {
    this.$store.dispatch("fecthCart");
  },
};
</script>
