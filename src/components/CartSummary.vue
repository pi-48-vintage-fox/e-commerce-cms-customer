<template>
  <!-- <div class="summary card"> -->
  <div class="summary">
    <p>Total Harga :</p>
    <p class="text-primary" style="font-weight: 500">
      {{ toCurrencyFormat(totalPrice) }}
    </p>
    <button class="btn btn-info btn-block" @click="checkout">Checkout</button>
  </div>
  <!-- </div> -->
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
  // created() {
  //   this.$store.dispatch('getTotalPrice')
  // },
  methods: {
    checkout() {
      this.$store.dispatch('checkout')
    },
    toCurrencyFormat(amount) {
      return (
        'Rp ' +
        new Intl.NumberFormat('id-ID', {
          style: 'decimal',
        }).format(amount)
      )
    },
  },
}
</script>

<style></style>
