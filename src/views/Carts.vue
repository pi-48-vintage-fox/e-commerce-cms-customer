<template>
  <div class="container mt-5">
    <b-row>
      <b-col class="p-3 border-left border-dark" style="max-height:500px; overflow: auto;">
        <div v-if="$store.state.carts.length === 0" class="d-flex justify-content-center flex-wrap">
          <lottie-player src="https://assets7.lottiefiles.com/temp/lf20_W5bxHx.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
          <h2>Your Cart is Empty</h2>
        </div>
        <CartComponent v-for="cart in $store.state.carts" :key="cart.id" :cart="cart"/>
      </b-col>
      <b-col class="p-3 border-left border-dark">
          <h1>Total</h1>
          <h3>
              {{total | toCurrency}}
          </h3>
          <b-button v-if="$store.state.carts.length === 0" variant="info" disabled class="form-control mt-4"><b-icon icon="shop-window"></b-icon> Checkout</b-button>
          <b-button v-else variant="info" class="form-control mt-4" @click="checkout"><b-icon icon="shop-window"></b-icon> Checkout</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CartComponent from '@/components/CartComponent.vue'
export default {
  name: 'Cart',
  components: {
    CartComponent
  },
  computed: {
    total () {
      let totalPrice = 0
      this.$store.state.carts.forEach(element => {
        const subTotal = element.qty * element.Product.price
        totalPrice += subTotal
      })
      return totalPrice
    }
  },
  methods: {
    checkout () {
      this.$store
        .dispatch('checkout')
        .then(({ data }) => {
          this.$bvToast.toast(data.msg, {
            title: 'Success',
            toaster: 'b-toaster-top-center',
            variant: 'success',
            autoHideDelay: 2000,
            solid: true
          })
          this.$store.dispatch('fetchCarts')
        })
        .catch((err) => {
          this.$bvToast.toast(err.response.data.msg, {
            title: 'Error',
            toaster: 'b-toaster-top-center',
            variant: 'danger',
            autoHideDelay: 2000,
            solid: true
          })
        })
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.dispatch('fetchCarts')
    }
  }
}
</script>

<style>
</style>
