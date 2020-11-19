<template>
  <div class="container d-flex flex-row justify-content-center">
    <div class="row justify-content-center">
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
      return this.$store.state.cart
    },
  },
}
</script>

<style></style>
