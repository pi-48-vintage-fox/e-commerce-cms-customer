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
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Save`,
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          return this.$store.dispatch('updateQty', dataProduct)
          
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
          this.$router.push('/cart')
        }
      })
      .then(({data}) => {
        Swal.fire('Saved!', '', 'success')
        this.$router.push('/cart')
      })
      .catch(err => {
        console.log(err.response.data);
        if (err.response.data.name == 'SequelizeValidationError') {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.errors[0].message
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        }
      })
    }
  },
  created () {

  }
};
</script>

<style>
</style>
