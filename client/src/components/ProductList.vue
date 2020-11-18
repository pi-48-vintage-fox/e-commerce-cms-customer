<template>
  <div class="col-4 my-2">
    <div class="card border border-dark" style="width: 18rem; height: 500px; overflow">
      <img :src="product.image_url" style="object-fit: cover; height: 300px" class="card-img-top" alt="" />
      <div class="card-body text-left">
        <h3 class="card-title" data-toggle="tooltip" data-placement="top" :title="product.name">{{ dottedProdName }}</h3>
        <p class="card-text">
          Price: IDR {{ priceIDR }} <br>
          Stock: {{ product.stock }}
        </p>
      </div>
      <a href="" class="btn py-2 rounded-bottom">Add To Cart</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['product'],
  computed: {
    dottedProdName: function () {
      if (this.product.name.length > 24) {
        return this.product.name.slice(0, 24) + '...'
      }
      return this.product.name
    },
    priceIDR: function () {
      return Number(this.product.price).toLocaleString('id')
    }
  }
}
</script>

<style>
</style>
