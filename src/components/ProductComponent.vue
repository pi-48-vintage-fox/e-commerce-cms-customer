<template>
  <div class="m-4">
    <b-card
      :title="product.name"
      :img-src="product.image_url"
      img-alt="Image"
      img-top
      tag="article"
      style="width: 20rem"
      class="mb-2 text-center"
    >
      <b-card-text>
        <hr />
        <b-row>
          <b-col>
            <span v-if="product.stock > 0">
              <b-icon icon="info-circle"></b-icon> {{ product.stock }} left
            </span>
            <span v-else class="text-danger">
              <b-icon icon="info-circle"></b-icon> Out of Stock
            </span>
          </b-col>
          <b-col>{{ product.price | toCurrency }}</b-col>
        </b-row>
      </b-card-text>
      <b-button
        v-if="product.stock > 0 && $store.state.isLogin === true"
        @click="addToCart"
        variant="info"
        class="form-control"
        ><b-icon icon="cart-plus"></b-icon> Add to Cart</b-button
      >
      <b-button
        v-else-if="product.stock > 0 && $store.state.isLogin === false"
        variant="info"
        class="form-control"
        to="/login"
        ><b-icon icon="cart-plus"></b-icon> Add to Cart</b-button
      >
      <b-button v-else variant="info" class="form-control" disabled
        ><b-icon icon="cart-plus"></b-icon> Add to Cart</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ProductComponent',
  props: ['product'],
  methods: {
    addToCart () {
      this.$store
        .dispatch('addCart', this.product.id)
        .then(({ data }) => {
          this.$bvToast.toast('Success add to cart', {
            title: 'Success',
            toaster: 'b-toaster-top-center',
            variant: 'success',
            autoHideDelay: 2000,
            solid: true
          })
        })
        .catch((err) => {
          this.$bvToast.toast(err.response.data.msg, {
            title: 'Error',
            toaster: 'b-toaster-top-center',
            variant: 'danger',
            autoHideDelay: 2000,
            solid: true
          })
        })
    }
  }
}
</script>

<style>
</style>
