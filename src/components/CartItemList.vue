<template>
  <div class="cartitem-list-item d-flex flex-column">
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-2">
          <img
            :src="cartitem.Product.imageUrl"
            class="card-img"
            :alt="cartitem.Product.name"
          />
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h5 class="card-title">{{ cartitem.Product.name }}</h5>
            <p class="card-text">
              {{ toCurrencyFormat(cartitem.Product.price) }}
            </p>
            <div class="d-flex flex-row justify-content-end">
              <div class="d-flex flex-row">
                <i
                  style="cursor:pointer"
                  class="material-icons mr-3 btn-delete"
                  @click="
                    deleteCartItem({
                      CartProductId: cartitem.id,
                    })
                  "
                  >delete_outline</i
                >
                <i
                  v-if="cartitem.quantity <= 1"
                  class="material-icons mr-2 md-dark md-inactive"
                  >remove_circle</i
                >
                <i
                  v-else
                  class="material-icons green mr-2"
                  style="cursor:pointer"
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
                  class="material-icons green"
                  style="cursor:pointer"
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
              </div>
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
}
</script>

<style></style>
