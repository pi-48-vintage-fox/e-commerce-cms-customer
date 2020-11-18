<template>
  <div class="cart-list">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <img :src="cart.Product.image_url" alt="" class="card-img h-80 w-100">
          </div>
          <div class="col">
            <h3 class="card-text">{{ cart.Product.name }}</h3>
            <h5 class="card-text">{{ cart.Product.price }}</h5>
            <h5 class="card-text">Subtotal:</h5>
            <p class="card-text">{{ subtotal }}</p>
            <form @submit.prevent="buy" class="mt-5">
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <input v-model="cart.gty" type="number" class="form-control">
                  </div>
                </div>
                <div class="col-6">
                  <button type="submit" class="btn btn-primary">Checkout</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  data () {
    return {
      subtotal: this.cart.gty * this.cart.Product.price
    }
  },
  props: ['cart'],
  methods: {
    buy () {
      const buyProduct = {
        id: +this.cart.ProductId,
        stock: this.cart.gty
      }
      this.$store.dispatch('buy', buyProduct)
        .then(({ data }) => {
          this.$store.dispatch('deleteCart', buyProduct)
          location.reload()
        })
        .catch(err => {
          if (err.response.status === 500) {
            this.$router.push({ name: 'Login' })
          }
        })
    }
  }
}
</script>

<style scoped>
  h3 {
    font-weight: 800;
  }
</style>
