<template>
  <div class="card" style="width: 40vh">
    <div class="card-body" style="padding: 4px">
      <h5>{{ cart.Product.name }}</h5>
      <h5 class="card-title" style="font-size: 10px">@ IDR {{ cart.Product.price }}</h5>
      <h5>
        <a><i class="fas fa-caret-left" style="color: #0278ae; cursor: pointer;"></i></a>
        {{ cart.quantity }}
        <a><i class="fas fa-caret-right" style="color: #0278ae; cursor: pointer;"></i></a>
        IDR {{ cart.quantity*cart.Product.price }}
      </h5>
      <button id="btn-trash" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  methods: {
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
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
