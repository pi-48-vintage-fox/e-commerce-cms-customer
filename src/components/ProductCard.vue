<template>
  <div>
    <div class="container">
      <div class="card">
        <img
          :src="product.image_url"
          alt="Avatar"
          width="200px"
          height="200px"
        />
        <div class="container">
          <h4>
            <b>{{ product.name }}</b>
          </h4>
          <p>Price : Rp {{ product.price.toLocaleString("id-ID") }}</p>
          <p>Stock : {{ product.stock }}</p>
          <button
            type="button"
            class="btn btn-dark"
            @click="addProductToCart({ ProductId: product.id, quantity: 1 })"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    getProductById () {
      this.$store.dispatch('getProductById', this.product.id).then(() => {
        this.$router.push(`/editProduct/${this.product.id}`)
      })
    },
    addProductToCart (payload) {
      this.$store.dispatch('addProductToCart', payload)
    }
  }
}
</script>

<style>
card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>
