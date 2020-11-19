<template>
  <div id="Cart">
    <div
      class="card mb-3 mx-auto bg-dark text-light"
      style="max-width: 100%; height: 202px"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            :src="cart.Product.image_url"
            class="card-img"
            style="height: 200px; object-fit: cover"
            alt=""
          />
        </div>
        <div class="col-md-8 d-flex align-items-center">
          <div class="card-body text-left">
            <h5 class="card-title">{{ cart.Product.name }}</h5>
            <p class="card-text" v-if="editMode === false">
              Price: IDR {{ cart.Product.price.toLocaleString("id") }}<br />
              Qty: {{ cart.quantity }} <br />
              Status: {{ cart.status }}
            </p>
            <div id="editOn" v-if="editMode === true">
              <p class="card-text">
                Price: IDR {{ cart.Product.price.toLocaleString("id") }}
              </p>
              <form action="">
                <div class="form-group">
                  <label for="qty" class="mr-2">Qty: </label>
                  <input
                    v-model="cart.quantity"
                    type="number"
                    name="qty"
                    id="qty"
                    width="10"
                    required
                    min="0"
                    :max="cart.Product.stock"
                  />
                  <a
                    href=""
                    @click.prevent="changeQty"
                    class="btn btn-sm btn-success ml-2 text-light"
                    >Confirm</a
                  >
                </div>
              </form>
            </div>
            <button
              class="btn btn-outline-success mx-1"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Checkout"
              @click.prevent="comingSoon"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-cart-check"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>
            <button
              @click.prevent="editModeOnOff"
              class="btn btn-outline-info mx-1"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Edit Quantity"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-pencil-square"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </button>
            <button
              class="btn btn-outline-danger mx-1"
              @click.prevent="deleteCart"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Remove Cart"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-trash"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <p class="text-left"><strong>Subtotal</strong>: IDR {{ subtotal }}</p>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'CartList',
  props: ['cart'],
  data () {
    return {
      editMode: false
    }
  },
  methods: {
    deleteCart () {
      const payload = {
        ProductId: this.cart.ProductId
      }
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
          this.$store.dispatch('removeCart', payload)
        }
      })
    },

    editModeOnOff () {
      if (this.editMode === false) {
        this.$store.dispatch('showCart')
        this.editMode = true
      } else {
        this.$store.dispatch('showCart')
        this.editMode = false
      }
    },

    changeQty () {
      this.editModeOnOff()
      if (this.cart.quantity > this.cart.Product.stock || this.cart.quantity < 0) {
        Swal.fire('Error', 'Cannot add items more than stock or in a negative value!', 'error')
        this.$store.dispatch('showCart')
      } else {
        Swal.fire('Successful!', `Successfully changed ${this.cart.Product.name} order quantity to ${this.cart.quantity}`, 'success')
        const qtyData = {
          ProductId: this.cart.ProductId,
          quantity: +this.cart.quantity
        }
        console.log(qtyData)
        this.$store.dispatch('changeQty', qtyData)
      }
    },

    comingSoon () {
      Swal.fire('Coming SOON!', 'This feature is not available yet due to TEU KABURU HEHE', 'info')
    }
  },
  created () {
    this.$store.dispatch('showCart')
  },
  computed: {
    subtotal () {
      return (this.cart.quantity * this.cart.Product.price).toLocaleString(
        'id'
      )
    }
  }
}
</script>

<style>
</style>
