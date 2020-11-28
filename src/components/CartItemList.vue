<template>
  <div class="cartitem-list-item d-flex flex-column">
    <div class="card mb-1">
      <div class="row no-gutters">
        <div class="col-md-3">
          <img
            :src="cartitem.Product.imageUrl"
            class="card-img"
            :alt="cartitem.Product.name"
          />
        </div>
        <div class="col-md-9">
          <div
            class="card-body d-flex flex-column justify-content-between h-100"
          >
            <div>
              <div
                class="d-flex flex-row justify-content-between align-items-start"
              >
                <h5 class="card-title">{{ cartitem.Product.name }}</h5>
                <span class="badge badge-pill badge-primary">{{
                  cartitem.Product.ProductCategory.name
                }}</span>
              </div>
              <h4 class="card-text text-success">
                {{ toCurrencyFormat(cartitem.Product.price) }}
              </h4>
            </div>

            <div class="d-flex flex-row justify-content-between">
              <div class="d-flex flex-row">
                <i
                  v-if="cartitem.quantity <= 1"
                  class="material-icons mr-2 md-dark md-inactive"
                  >remove_circle</i
                >
                <i
                  v-else
                  class="material-icons green mr-2 click"
                  @click="
                    updateQuantity({
                      CartId: cart.id,
                      ProductId: cartitem.ProductId,
                      quantity: cartitem.quantity - 1,
                      CartProductId: cartitem.id,
                    })
                  "
                  >remove_circle</i
                >
                <p class="product-quantity mr-2">{{ cartitem.quantity }}</p>
                <i
                  v-if="cartitem.Product.stock <= cartitem.quantity"
                  class="material-icons mr-2 md-dark md-inactive"
                  >add_circle</i
                >
                <i
                  v-else
                  class="material-icons green click"
                  @click="
                    updateQuantity({
                      CartId: cart.id,
                      ProductId: cartitem.ProductId,
                      quantity: cartitem.quantity + 1,
                      CartProductId: cartitem.id,
                    })
                  "
                  >add_circle</i
                >
                <p class="ml-3">Stock: {{ cartitem.Product.stock }}</p>
              </div>
              <i
                class="material-icons mr-3 btn-delete click"
                @click="
                  deleteCartItem({
                    CartProductId: cartitem.id,
                  })
                "
                >delete_outline</i
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItemList',
  props: ['cartitem', 'cart'],
  methods: {
    toCurrencyFormat(amount) {
      return (
        'Rp ' +
        new Intl.NumberFormat('id-ID', {
          style: 'decimal',
        }).format(amount)
      )
    },
    updateQuantity(payload) {
      console.log(payload, '<<<< payload update qty')
      this.$store.dispatch('updateQuantity', payload)
    },
    deleteCartItem(payload) {
      console.log(payload, '<<<< payload delete cart item')
      this.$store.dispatch('deleteCartItem', payload)
    },
  },
  created() {
    console.log(this.cartitem)
  },
}
</script>

<style></style>
