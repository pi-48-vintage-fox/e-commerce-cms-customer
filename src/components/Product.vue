<template>
  <div class="product uk-card uk-card-default uk-card-hover">
    <div class="product-img">
      <a href="#" @click.prevent="addToCart"><span class="plus-icon" uk-icon="icon: plus-circle; ratio: 1.5"></span></a>
      <a href="#" @click.prevent="like"><span v-if="!liked" class="heart-icon" uk-icon="icon: heart; ratio: 1.5"></span></a>
      <a href="#" @click.prevent="unlike"><span v-if="liked" class="heart-icon heart-icon-liked" uk-icon="icon: heart; ratio: 1.5"></span></a>
      <img id="product-image" :src="productImage" alt="">
    </div>
    <div class="product-description">
      <div class="product-name">
        <p>{{ product.name }}</p>
      </div>
      <div class="product-state">
        <div class="product-price">
          <small>{{ priceInFormat }}</small>
        </div>
        <div class="product-stock"><small>Stock: {{ product.stock }}</small></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  methods: {
    addToCart () {
      const found = this.cart.find(element => element.product_id === this.product.id)
      if (found) {
        if (found.amount === this.product.stock) {
          throw new Error("You cannot buy item for more than it's available stock")
        } else {
          this.$store.dispatch('incrementAmount', this.product.id)
        }
      } else {
        this.$store.dispatch('addToCart', this.product.id)
      }
    },
    like () {
      this.$store.dispatch('addToWishlist', this.product.id)
    },
    unlike () {
      this.$store.dispatch('removeFromWishlist', this.product.id)
    }
  },
  props: ['product'],
  computed: {
    priceInFormat () {
      let rupiah = ''
      const angkarev = this.product.price.toString().split('').reverse().join('')
      for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('') + ',-'
    },
    productImage () {
      if (this.product.image_url) {
        return this.product.image_url
      } else {
        return '../assets/image/no-image.png'
      }
    },
    wishlist () {
      return this.$store.state.wishlist
    },
    liked () {
      if (this.wishlist !== '') {
        const isLiked = this.wishlist.find(element => element.Product.id === this.product.id)
        if (isLiked) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    cart () {
      return this.$store.state.cart
    }
  }
}
</script>

<style scoped>
#product-image {
  width: 350px;
  height: 220px;
}

.heart-icon {
  margin: 10px;
  margin-left: 50px;
  position: absolute;
  color: black;
}

.heart-icon-liked {
  margin: 10px;
  margin-left: 50px;
  position: absolute;
  color: #ff9966;
}

.heart-icon:hover {
  color: #ff9966;
  transition: 300ms;
}

.heart-icon-liked:hover {
  color: black;
  transition: 300ms;
}

.plus-icon {
  margin: 10px;
  position: absolute;
  color: black;
}

.plus-icon:hover {
  color: #ff9966;
  transition: 300ms;
}

.product {
  margin-right: 10px;
  margin-bottom: 10px;
}

.product-image a {
  color: black;
}

.product-name {
  margin-top: 5px;
}

.product-state {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
</style>
