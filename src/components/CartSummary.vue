<template>
  <!-- <div class="summary card"> -->
  <div class="summary">
    <p class="font-weight-bold">Total Harga :</p>
    <p class="text-primary h4" style="font-weight: 500">
      {{ toCurrencyFormat(cart.grandTotalPrice) }}
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
    cart() {
      return this.$store.state.user.cart
    },
  },

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
