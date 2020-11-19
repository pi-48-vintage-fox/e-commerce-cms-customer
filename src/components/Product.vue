<template>
  <div class="card" style="width: 18rem; margin: 10px">
    <img id="image-top"
      :src="product.image_url"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <p class="card-text" style="font-size: 20px; margin-bottom: -33px">
        {{ product.name }}
      </p>
      <div
        class="btn btn-primary"
        style="font-size: 10px; width: 80px; margin-left: 170px"
      >
        {{ product.category }}
      </div>
      <p class="card-text" style="margin-bottom: 1px">
        <b>IDR {{ product.price }}</b>
      </p>
      <p class="card-text" style="font-size: 15px">Stock: {{ product.stock }}</p>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-primary active">
          <input type="radio" name="options" id="option1" checked />
          <i class="fas fa-cart-plus"></i>
        </label>
        <button @click.prevent="addToCart(product)" class="btn btn-primary">
          Add to Cart
        </button>
        <div class="btn-heart"><i class="fas fa-heart fa-2x"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    addToCart (payload) {
      this.$store.dispatch('addToCart', payload)
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  props: ['product'],
  created () {
    this.fetchProducts()
  }
}
</script>

<style>
#image-top {
    height: 200px;
}
</style>
