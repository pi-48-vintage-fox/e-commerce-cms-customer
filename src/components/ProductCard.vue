<template>
  <div class="col-3 mb-4">
    <div class="card">
      <img :src="product.imageUrl" class="card-img-top" :alt="product.name" />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">
          {{ toCurrencyFormat(product.price) }}
        </p>
        <button
          class="btn btn-primary"
          @click="
            addProductToCart({
              CartId: cart.id,
              ProductId: product.id,
              quantity: 1,
            })
          "
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    toCurrencyFormat(amount) {
      return (
        'Rp ' +
        new Intl.NumberFormat('id-ID', {
          style: 'decimal',
        }).format(amount)
      )
    },
    addProductToCart(payload) {
      this.$store.dispatch('addProductToCart', payload)
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
  },
}
</script>

<style></style>
