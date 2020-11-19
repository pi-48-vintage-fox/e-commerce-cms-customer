<template>
  <div class="container mt-2">
    <h1>Update Qty</h1>
    <div class="row d-flex"></div>
    <div class="card col-3" style="width: 18rem">
      <img :src="fetchProductById.Product.image_url" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ fetchProductById.Product.name }}</h5>
        <p class="card-text">Price: {{ fetchProductById.Product.price }}</p>
        <input class="form-control" type="number" v-model="qty" placeholder="input update Qty here"><br>
        <a href="#" @click.prevent="updateQty(fetchProductById.Product.id)" class="btn btn-primary">Update</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      qty:''
    }
  },
  name: "FormUpdate",
  computed: {
    fetchProductById () {
      console.log(this.$store.state.ProductById);
      this.qty = this.$store.state.ProductById.quantity
      return this.$store.state.ProductById
      
    }
  },
  methods: {
    updateQty (id) {
      let dataProduct = {
        qty: this.qty,
        ProductId: id
      }
      this.$store.dispatch('updateQty', dataProduct)
       .then(({data}) => {
        this.$router.push('/cart')
      })
      .catch(err => {
        console.log(err.response);
      })
    }
  },
  created () {

  }
};
</script>

<style>
</style>
