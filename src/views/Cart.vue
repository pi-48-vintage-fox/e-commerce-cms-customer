<template>
  <div class="container">
    <div class="cart mt-5">
      <div class="row">
        <div class="col-10">
          <CartList v-for="cart in carts" :key="cart.id"
            :cart="cart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from '@/components/CartList.vue'
export default {
  name: 'Cart',
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    }
  },
  components: {
    CartList
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

<style scoped>
  .container {
    margin-top: 133px;
  }
</style>
