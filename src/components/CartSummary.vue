<template>
  <div>
    <p>Total Harga :</p>
    <p>{{ totalPrice }}</p>
    <button class="btn btn-info" @click="checkout">Checkout</button>
  </div>
</template>

<script>
export default {
  name: 'CartSummary',
  // props: ['totalPrice'],
  computed: {
    totalPrice() {
      return this.$store.state.totalPrice
    },
  },
  created() {
    this.$store.dispatch('getTotalPrice')
  },
  methods: {
    checkout() {
      this.$store.dispatch('checkout')
    },
  },
}
</script>

<style></style>
