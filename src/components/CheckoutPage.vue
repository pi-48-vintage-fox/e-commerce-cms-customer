<template>
  <div class="checkout">
    <form @submit.prevent="addCheckout">
      <div class="form-group">
        <input v-model="checkout.name" type="text" class="form-control" placeholder="Enter your name">
      </div>
      <div class="form-group">
        <textarea v-model="checkout.address" class="form-control" cols="30" rows="5" placeholder="Address"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Checkout',
  props: ['stock', 'product'],
  data () {
    return {
      checkout: {
        name: '',
        address: '',
        ProductId: 0,
        qty: ''
      }
    }
  },
  methods: {
    getProduct () {
      this.checkout.ProductId = this.product.id
    },
    getStock () {
      this.checkout.qty = this.stock
    },
    addCheckout () {
      const addCheckout = this.checkout
      this.$store.dispatch('addCheckout', addCheckout)
        .then(({ data }) => {
          this.$router.push('/')
        })
        .catch(console.log)
    }
  },
  created () {
    this.getProduct()
    this.getStock()
  },
  beforeRouteEnter (to, from, next) {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
