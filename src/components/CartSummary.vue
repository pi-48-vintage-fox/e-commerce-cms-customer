<template>
  <!-- <div class="summary card"> -->
  <div class="summary">
    <p>Total Harga :</p>
    <p class="text-primary" style="font-weight: 500">
      {{ toCurrencyFormat(totalPrice) }}
    </p>
    <button
      class="btn btn-info btn-block"
      @click="checkout({ CartId: cart.id })"
    >
      Checkout
    </button>
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
    cart() {
      return this.$store.state.cart
    },
  },
  // created() {
  //   this.$store.dispatch('getTotalPrice')
  // },
  methods: {
    checkout(payload) {
      this.$store.dispatch('checkout', payload)
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
