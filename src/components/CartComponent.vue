<template>
  <div class="mb-3">
    <b-card no-body class="overflow-hidden" style="max-width: 540px">
      <b-row no-gutters>
        <b-col>
          <b-card-img
            :src="cart.Product.image_url"
            alt="Image"
            class="rounded-0"
            style="width: 200px; height: 200px"
          ></b-card-img>
        </b-col>
        <b-col>
          <b-icon
            icon="trash-fill"
            variant="danger"
            @click="deleteCart"
            style="position: absolute; top: 10px; right: 10px"
          ></b-icon>
          <b-card-body :title="cart.Product.name">
            <hr />
            <b-card-text>
              <b-icon icon="dash-circle" variant="info" @click="minCart"></b-icon>
              <span class="mx-4">{{cart.qty}}x</span>
              <b-icon icon="plus-circle" variant="info" @click="addCart"></b-icon>
            </b-card-text>
            <b-card-text>Sub Total : {{subTotal | toCurrency}} </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CartComponent',
  props: ['cart'],
  methods: {
    minCart () {
      const payload = {
        id: this.cart.id,
        qty: -1
      }
      this.$store.dispatch('updateCart', payload)
        .then(data => {
          this.$store.dispatch('fetchCarts')
        })
        .catch(err => {
          this.$bvToast.toast(err.response.data.msg, {
            title: 'Error',
            toaster: 'b-toaster-top-center',
            variant: 'danger',
            autoHideDelay: 2000,
            solid: true
          })
        })
    },
    addCart () {
      const payload = {
        id: this.cart.id,
        qty: 1
      }
      this.$store.dispatch('updateCart', payload)
        .then(data => {
          this.$store.dispatch('fetchCarts')
        })
        .catch(err => {
          this.$bvToast.toast(err.response.data.msg, {
            title: 'Error',
            toaster: 'b-toaster-top-center',
            variant: 'danger',
            autoHideDelay: 2000,
            solid: true
          })
        })
    },
    deleteCart () {
      this.$store.dispatch('deleteCart', this.cart.id)
        .then(data => {
          this.$bvToast.toast('Cart deleted', {
            title: 'Deleted',
            toaster: 'b-toaster-top-center',
            variant: 'success',
            autoHideDelay: 2000,
            solid: true
          })
          this.$store.dispatch('fetchCarts')
        })
        .catch(err => {
          this.$bvToast.toast(err.response.data.msg, {
            title: 'Error',
            toaster: 'b-toaster-top-center',
            variant: 'danger',
            autoHideDelay: 2000,
            solid: true
          })
        })
    }
  },
  computed: {
    subTotal () {
      return this.cart.qty * this.cart.Product.price
    }
  }
}
</script>

<style>
</style>
