<template>
  <div class="col-4" v-if="product.stock > 0">
    <div class="card mt-5">
      <img class="card-img-top" :src="product.image_url" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title"><a href="#" @click.prevent="detailProduct(product.id)">{{ product.name }}</a></h5>
          <a href="" @click.prevent="findCartById(product.id)" class="btn btn-info card-text">Add to cart</a>
          <span class="badge badge-primary ml-5 card-text">{{ product.Category.name }}</span>
          <p class="card-text mt-3">Available: {{product.stock}}</p>
      </div>
      <div class="card-footer">
        <p class="card-text">{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  props: ['product'],
  methods: {
    detailProduct (id) {
      this.$router.push({ name: 'Detail', params: { id } })
    },
    findCartById (id) {
      const payload = {
        ProductId: id,
        qty: 1
      }
      const accessToken = localStorage.getItem('access_token')
      if (accessToken) {
        this.$store.dispatch('findCartById', payload)
      } else {
        this.$router.push({ name: 'Login' })
      }
    }
  }
}
</script>

<style scoped>
  .card::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(127, 143, 166,1.0);
    margin-top: 33px;
    filter: blur(15px);
    z-index: -1;
  }
</style>
