<template>
  <div class="container d-flex flex-row justify-content-center">
    <div class="row justify-content-center">
      <div v-if="cart.CartProducts && cart.CartProducts.length === 0">
        <h1>Your cart is empty</h1>
      </div>
      <div v-else class="row">
        <div class="cartitem-list col-8 justify-content-center mr-3">
          <CartItemList
            v-for="cartitem in cart.CartProducts"
            :key="cartitem.id"
            :cartitem="cartitem"
            :cart="cart"
            class="col-12 mb-3"
          />
        </div>
        <div class="col-3">
          <CartSummary />
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
  },
}
</script>

<style></style>
