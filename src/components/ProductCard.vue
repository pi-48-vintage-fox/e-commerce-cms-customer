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
          v-if="!isInCart(product.id)"
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
        <button v-else class="btn btn-secondary" disabled>
          Added to cart
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
      if (!localStorage.getItem('access_token')) {
        this.$router.push('/login')
      } else {
        this.$store.dispatch('addProductToCart', payload)
      }
    },
    isInCart(ProductId) {
      let result = false
      if (this.cart.CartProducts) {
        this.cart.CartProducts.map(cartitem => {
          if (cartitem.ProductId == ProductId) {
            result = true
          }
        })
      }

      return result
    },
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    },
  },
}
</script>

<style></style>
