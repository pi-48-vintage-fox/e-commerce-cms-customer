<template>
  <div class="card" style="width: 40vh">
    <div class="card-body" style="padding: 4px">
      <h5>{{ cart.Product.name }}</h5>
      <h5 class="card-title" style="font-size: 10px">@ IDR {{ cart.Product.price }}</h5>
      <h5>
        <a @click.prevent="minusQty(cart)"><i class="fas fa-caret-left" style="color: #0278ae; cursor: pointer;"></i></a>
        {{ cart.quantity }}
        <a @click.prevent="plusQty(cart)"><i class="fas fa-caret-right" style="color: #0278ae; cursor: pointer;"></i></a>
        IDR {{ cart.quantity*cart.Product.price }}
      </h5>
      <button @click="deleteCart(cart.id)" id="btn-trash" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  methods: {
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
    },
    minusQty (payload) {
      this.$store.dispatch('minusQty', payload)
    },
    plusQty (payload) {
      this.$store.dispatch('plusQty', payload)
    },
    deleteCart (id) {
      this.$store.dispatch('deleteCart', { id })
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  props: ['cart'],
  created () {
    this.fetchCarts()
  }

}
</script>

<style>
#btn-trash {
  margin-top: -70px;
  margin-left: 180px;
}
</style>
