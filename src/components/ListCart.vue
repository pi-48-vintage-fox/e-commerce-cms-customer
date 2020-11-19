<template>
  <div>
    <Navbar/>
    <div class="mt-5 mb-5"></div>
    <div class="container mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <cartTable
          v-for="cart in carts"
          :key="cart.id"
          :cart="cart"
          >
          </cartTable>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CartTable from '../components/CartTable'
import Navbar from '../components/Navbar'
export default {
  name: 'ListCart',
  components: {
    CartTable, Navbar
  },
  data () {
    return {

    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCarts')
    }
  },
  created () {
    this.fetchCart()
  }
}
</script>

<style>

</style>
