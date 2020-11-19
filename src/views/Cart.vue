<template>
    <div class="container col-10" style="background-color: #eff1ee; opacity: 0.8;">
    <div id="products">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="text-center">Image</th>
            <th scope="col" class="text-center">Name</th>
            <th scope="col" class="text-center">Quantity</th>
            <th scope="col" class="text-center">Total Price</th>
            <th scope="col" class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
        <CartBody v-for="cart in $store.state.cart" :key="cart.id" :cart="cart"/>
        <tr>
          <th></th>
          <th></th>
          <th class="text-center">Total Price</th>
          <th class="text-center">{{totalPrice}}</th>
          <td><button class="btn btn-primary" @click.prevent="checkOut" style="margin-right: 5px">Proceed To Checkout</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CartBody from '../components/CartBody'
export default {
  name: 'Cart',
  components: {
    CartBody
  },
  created () {
    this.$store.dispatch('fetchCart')
  },
  methods: {
    checkOut () {
      this.$store.dispatch('checkOut')
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.$store.state.cart.forEach(el => {
        total += el.total_price
      })
      return total
    }
  }
}
</script>

<style>

</style>
