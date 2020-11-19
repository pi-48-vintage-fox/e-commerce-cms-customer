<template>
  <div class="col-4 my-2 d-flex justify-content-center">
    <div class="card" style="width: 18rem; height: 500px; overflow">
      <img :src="product.image_url" style="object-fit: cover; height: 300px" class="card-img-top" alt="" />
      <div class="card-body text-left">
        <h3 class="card-title" data-toggle="tooltip" data-placement="top" :title="product.name">{{ dottedProdName }}</h3>
        <p class="card-text">
          Price: IDR {{ priceIDR }} <br>
          Stock: {{ product.stock }} <br>
        </p>
      </div>
      <a href="" class="btn btn-custom btn-block" @click.prevent="addToCart">Add To Cart</a>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Card',
  props: ['product'],
  methods: {
    addToCart () {
      if (localStorage.access_token) {
        const cartData = {
          ProductId: this.product.id,
          quantity: 1
        }
        this.$store.dispatch('addCart', cartData)
        Swal.fire({
          title: 'Successfull!',
          text: 'Item has been added to your cart',
          icon: 'success',
          confirmButtonText: 'View cart',
          cancelButtonText: 'Continue shopping',
          showCancelButton: true
        })
          .then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/carts')
            }
          })
      } else {
        Swal.fire({
          title: 'Failed!',
          text: 'You have to login first',
          icon: 'error',
          confirmButtonText: "Let's Login",
          showCancelButton: true
        })
          .then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/login')
            }
          })
      }
    }
  },
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
