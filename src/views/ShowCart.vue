<template>
  <section>
    <HomeNavbar></HomeNavbar>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cart in carts" :key="cart.id">
          <td>{{cart.Product.name}}</td>
          <td><img :src="cart.Product.image_url" class="imgtable rounded"></td>
          <td><i @click="subsQty(cart.id)" class="fas fa-minus"></i>   {{cart.quantity}}   <i class="fas fa-plus" @click="addQty(cart.id)"></i> </td>
          <td>{{cart.Product.price * cart.quantity}} </td>
          <td>
            <button type="button" class="btn btn-danger" @click="deleteCart(cart.id)">DELETE CART</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import HomeNavbar from '../components/HomeNavbar'
export default {
  name: 'ShowCart',
  components: {
    HomeNavbar
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    },
    deleteCart (id) {
      this.$store.dispatch('deleteCart', { id })
    },
    addQty (id) {
      this.$store.dispatch('updateCart', { id, qty: 1 })
    },
    subsQty (id) {
      this.$store.dispatch('updateCart', { id, qty: -1 })
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.fetchCart()
  }
}
</script>

<style>
.imgtable{
  height: 200px;
  width: 200px;
}
</style>
