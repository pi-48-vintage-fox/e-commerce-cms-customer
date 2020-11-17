<template>
  <div>
    <v-container> 
      <h1>{{orders}}</h1>
    </v-container>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "Cart",
  computed: {
    // ...mapState({
    //   orders: "addToCart",
    // }),
    orders () {
      return this.$store.state.addToOrder
    }
  },
  created () {
    console.log(this.orders, 'ini dr cart')
  }
};
</script>

<style></style>
