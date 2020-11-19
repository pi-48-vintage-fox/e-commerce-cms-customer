<template>
  <div id="products">
    <img :src="cart.Product.image_url" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ cart.Product.name }}</h5>
      <table class="table table-bordered table-dark text-primary display-5">
        <tbody>
          <tr>
            <td>Price</td>
            <td>Rp. {{ cart.Product.price.toLocaleString("id") }}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>{{ cart.quantity }}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>{{ cart.Product.category }}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h4 class="text-warning">{{ cart.status }}</h4>
      </div>
      <div class="flex-rows m-3" v-show="formEdit === false">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 16 16"
          class="bi bi-pencil-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          @click="editCart(cart.id)"
        >
          <path
            fill-rule="evenodd"
            d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
          />
        </svg>
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 16 16"
          class="bi bi-trash-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          type="button"
          @click="deleteCart(cart.id)"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
          />
        </svg>
      </div>
      <EditCart
        v-show="formEdit === true"
        :cart="cart"
        @closeForm="closeForm"
        @closesForm="closesForm"
      ></EditCart>
    </div>
  </div>
</template>

<script>
import EditCart from './EditCart'
export default {
  name: 'CartsCard',
  components: {
    EditCart
  },
  data () {
    return {
      formEdit: false
    }
  },
  props: ['cart'],
  methods: {
    deleteCart (id) {
      this.$store.dispatch('deleteCart', id)
    },
    editCart (id) {
      this.formEdit = true
    },
    closesForm (value) {
      this.formEdit = value
    },
    closeForm (value) {
      this.formEdit = value
    }
  }
}
</script>

<style>
.flex-rows {
  display: flex;
  justify-content: space-between;
}
</style>
