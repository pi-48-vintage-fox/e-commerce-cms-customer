<template>
  <div class="col-3 mb-4">
    <div class="card">
      <img :src="product.imageUrl" class="card-img-top" :alt="product.name" />
      <div class="card-body text-center">
        <h5 class="card-title text-truncate">{{ product.name }}</h5>
        <p class="card-text mb-2">
          {{ toCurrencyFormat(product.price) }}
        </p>
        <button
          v-if="product.stock === 0"
          class="btn btn-secondary btn-sm"
          disabled
        >
          Out of stock
        </button>
        <button
          v-else-if="isInCart(product.id)"
          class="btn btn-secondary btn-sm"
          disabled
        >
          Added to cart
        </button>
        <button
          v-else-if="isAddingCartItem == product.id"
          class="btn btn-primary btn-sm"
          disabled
        >
          Adding to cart
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </button>
        <button
          v-else-if="!isInCart(product.id)"
          class="btn btn-primary btn-sm"
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
      return this.$store.state.user.cart
    },
    isAddingCartItem() {
      return this.$store.state.isAddingCartItem
    },
  },
}
</script>

<style></style>
