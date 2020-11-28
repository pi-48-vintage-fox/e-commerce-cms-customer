<template>
  <!-- <div class="summary card"> -->
  <div
    class="summary d-flex flex-row justify-content-between p-3 bg-white border-top"
  >
    <div class="d-flex flex-row align-items-end">
      <p class="font-weight-bold mr-2">Total Harga :</p>
      <p class="text-primary h4 m-0 font-weight-bold" style="font-weight: 500">
        {{ toCurrencyFormat(cart.grandTotalPrice) }}
      </p>
    </div>
    <button class="btn btn-success " @click="checkout({ CartId: cart.id })">
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
