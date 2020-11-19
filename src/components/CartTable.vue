<template>
  <tr>
      <th scope="row">{{ cart.Product.name }}</th>
      <td>
        <img :src="cart.Product.image_url" class="img-thumbnail" alt="">
      </td>
      <td>
        <form @submit.prevent="updateCart(cart.ProductId)">
          <input v-model="quantity" type="number">
          <button type="submit" class="material-icons btn">check</button>
          <p>You pick {{ cart.quantity }} items</p>
        </form>
      </td>
      <td>Rp{{ totalPrice.toLocaleString('id-ID') }}</td>
      <td>
        <button @click.prevent="deleteCart(cart.ProductId)" type="button" class="btn btn-danger material-icons">delete</button>
      </td>
    </tr>
</template>

<script>
// import Swal from 'sweetalert2'
export default {
  name: 'CartTable',
  props: ['cart'],
  data () {
    return {
      totalPrice: this.cart.quantity * this.cart.Product.price,
      quantity: 0
    }
  },
  methods: {
    deleteCart (ProductId) {
      console.log(ProductId)
      this.$store.dispatch('deleteCart', ProductId)
    },
    updateCart (ProductId) {
      const stock = this.cart.Product.stock
      const quantity = +this.cart.quantity + +this.quantity
      const payload = {
        ProductId,
        quantity,
        stock
      }
      this.$store.dispatch('updateCart', payload)
    }
  }
}
</script>

<style scoped>
  img {
    width: 6rem;
    height: 6rem;
  }
</style>
