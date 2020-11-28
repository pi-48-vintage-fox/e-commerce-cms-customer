<template>
  <div
    class="container-md cartitem-list-container d-flex flex-row justify-content-center"
  >
    <!-- <div
      v-if="isFetchingCart"
      class="row justify-content-center align-items-center"
      style="height:300px"
    >
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div> -->
    <div class="row justify-content-center">
      <div v-if="cart.CartProducts && cart.CartProducts.length === 0">
        <h1>Your cart is empty</h1>
      </div>
      <div v-else class="row">
        <div class="cartitem-list justify-content-center mr-3">
          <CartItemList
            v-for="cartitem in cart.CartProducts"
            :key="cartitem.id"
            :cartitem="cartitem"
            :cart="cart"
            class="col-12 mb-3"
          />
        </div>
        <div class="col-3">
          <CartSummary v-if="grandTotalPrice" class="fixed-bottom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItemList from '@/components/CartItemList.vue'
import CartSummary from '@/components/CartSummary.vue'
export default {
  name: 'Cart',
  created() {
    this.$store.dispatch('fetchCart')
  },
  components: {
    CartItemList,
    CartSummary,
  },
  computed: {
    cart() {
      return this.$store.state.user.cart
    },
    isFetchingCart() {
      return this.$store.state.isFetchingCart
    },
    grandTotalPrice() {
      return this.$store.state.user.cart.grandTotalPrice
    },
  },
}
</script>

<style></style>
