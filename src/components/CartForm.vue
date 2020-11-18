<template>
  <div>
    <div class="card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="cart.Product.image_url" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{cart.Product.name}}</h5>
            <div class="row justify-content-center">
              <div class="col md-2">
              <button type="button" class="btn btn-outline-secondary" @click="kurang(cart)">-</button>
              </div>
              <div class="col md-2">
              <p>{{cart.quantity}}</p>
              </div>
              <div class="col md-2">
              <button type="button" class="btn btn-outline-success" @click="tambah(cart)">+</button>
              </div>
            </div>
              <button type="button" class="btn btn-outline-danger" @click="deleteCart(cart.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart-form",
  props: ["cart"],
  methods: {
    tambah(payload){
      this.$store.dispatch('tambah', payload)
    },
    kurang(payload){
      this.$store.dispatch('kurang', payload)
    },
    deleteCart(id){
      this.$store.dispatch('deleteCart', id)
    }
  }
};
</script>

<style>
</style>