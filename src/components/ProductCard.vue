<template>
  <div class="column is-one-quarter item-card">
    <div class="img-bg">
      <img :src="product.image_url">
    </div>
    <div class="product-detail mt-5">
        <p class="title is-6 ">{{product.name}}</p>
        <div class="level">
          <div class="level-left">
            <p class="subtitle is-6 has-text-tan" style="margin-bottom:1rem;">Rp. {{product.price}}</p>
          </div>
          <div class="level-right">
            <p class="subtitle is-6 " style="margin-bottom:1rem;">Stock : {{product.stock}}</p>
          </div>
        </div>
      <div class="product-action level" @click='checkLogin("cart")' >
        <div class="cart-btn level-left" v-if="product.stock > 0">
          <i class="fas fa-cart-plus mr-2"></i>Add to cart
        </div>
        <div class="cart-btn level-left" v-else>
          <i class="fas fa-cart-plus mr-2"></i>OUT OF STOCK
        </div>
        <div class="wishlist-btn level-right coret" @click='checkLogin("wishlist")'>
          Add to Wishlist<i class="fas fa-heart ml-2"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: ['product'],
  methods: {
    checkLogin (origin) {
      if (!localStorage.access_token) {
        this.$events.emit('loginModalOpen')
      } else {
        if (origin === 'cart') {
          if (this.product.stock > 0) {
            this.$store.dispatch('updateCart', this.product)
          }
        } else {
          this.$store.dispatch('addWishlist', this.product)
        }
      }
    }
  }

}
</script>
