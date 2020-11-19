<template>
  <tr>
      <td><img :src="cart.Product.image_url" style="width: 100px"></td>
      <td>{{cart.Product.name}}</td>
      <td>
        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-file-minus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path  @click.prevent="decrement" fill-rule="evenodd" d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"/>
        </svg>
        {{cart.quantity}}
        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-file-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path @click.prevent="increment" fill-rule="evenodd" d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
        </svg>
      </td>
      <td>{{cart.total_price}}</td>
      <td><button class="btn btn-dark" @click="deleteFromCart()" style="margin-right: 5px">Delete</button></td>
  </tr>
</template>

<script>
export default {
  name: 'CartBody',
  props: ['cart'],
  methods: {
    decrement () {
      const payload = {
        ProductId: this.cart.ProductId,
        quantity: this.cart.quantity - 1,
        total_price: this.cart.total_price - this.cart.Product.price
      }
      console.log(payload)
      this.$store.dispatch('updateCart', payload)
    },
    increment () {
      const payload = {
        ProductId: this.cart.ProductId,
        quantity: this.cart.quantity + 1,
        total_price: this.cart.total_price + this.cart.Product.price
      }
      this.$store.dispatch('updateCart', payload)
    },
    deleteFromCart () {
      console.log('dihapus')
      const payload = {
        ProductId: this.cart.ProductId
      }
      this.$store.dispatch('deleteFromCart', payload)
    }
  }
}
</script>

<style>

</style>
