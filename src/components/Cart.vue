<template>
  <div class="cart-items">
    <div class="cart-item mt-4" v-for="(item,index) in cartItems" :key='item.id'>
      <div class="cart-item-image">
        <img :src=item.Product.image_url>
      </div>
      <div class="cart-item-detail">
        <p class="title is-6">{{item.Product.name}}</p>
        <p class="subtitle is-6">Rp. {{item.Product.price * item.qty}}</p>
      </div>
      <div class="cart-item-qty">
        <a href="#" class="btn btn-grey" @click.prevent='increaseQty(index)'><i class="fas fa-plus"></i></a>
        <p class="mt-2 mb-2"><strong>{{item.qty}}</strong></p>
        <a href="#" class="btn btn-grey" @click.prevent='decreaseQty(index)'><i class="fas fa-minus"></i></a>
      </div>
    </div>
    <div class="checkout">
      <div class="columns mt-1" style="  border-bottom:1px solid rgb(221, 221, 221);">
        <div class="column">
          <p style="text-align:left;">Order Total</p>
        </div>
        <div class="column">
          <p style="text-align:right">Rp. {{orderTotal}}</p>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <a href="#" class="button btn-tan is-full-width" @click.prevent='checkout'>Checkout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cartItems () {
      return this.$store.state.cart
    },
    orderTotal () {
      let total = 0
      this.cartItems.forEach(item => {
        total += (item.Product.price * item.qty)
      })
      return total
    }
  },
  methods: {
    checkout () {
      this.$store.dispatch('checkout', this.cartItems)
    },
    increaseQty (index) {
      if (this.cartItems[index].qty < this.cartItems[index].Product.stock) {
        this.cartItems[index].qty++
        const payload = {
          ProductId: this.cartItems[index].ProductId,
          qty: this.cartItems[index].qty
        }
        this.$store.dispatch('updateCartQty', payload)
      }
    },
    decreaseQty (index) {
      if (this.cartItems[index].qty === 1) {
        const payload = {
          ProductId: this.cartItems[index].ProductId
        }
        this.$store.dispatch('deleteCartItem', payload)
      } else {
        this.cartItems[index].qty--
        const payload = {
          ProductId: this.cartItems[index].ProductId,
          qty: this.cartItems[index].qty
        }
        this.$store.dispatch('updateCartQty', payload)
      }
    }
  }

}
</script>
