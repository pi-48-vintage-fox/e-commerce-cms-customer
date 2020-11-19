<template>
  <div class="card mt-5 mb-5 ml-3 mr-5" style="width: 15rem;">
    <img :src="product.image_url" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title font-weight-bold">{{product.name}}</h5>
        <p class="card-text">Rp. {{product.price}}</p>
        <h6 class="card-text text-muted">Remaining Item: {{product.stock}}</h6>
        <a href="#" @click.prevent="addToCart" class="btn btn-primary">Add to cart</a>
    </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addToCart () {
      const payload = {
        ProductId: +this.product.id,
        quantity: +1,
        product_price: +this.product.price
      }
      this.$store.dispatch('addToCart', payload)
    }
  }
}
</script>

<style>

</style>
