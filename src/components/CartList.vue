<template>
<div>
<div class="card mb-3 " style="max-width: 540px; ">
  <div class="row no-gutters justify-content-center" v-for="item in carts" :key="item.id">
    <div class="col-md-4">
      <img :src="`${item.Product.image_url}`" class="card-img" style="height: 100px" >
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{item.Product.name}}</h5>
        <p class="card-text">RP. {{item.Product.price * item.qty}}</p>
        <div class="row justify-content-between">
            <div class="col">
                <button v-show="appear" class="btn btn-success" @click="plusItem(item.Product.id, item.qty, item)">+</button>
                <span class="card-text" style="margin-left:10px; margin-right:10px">{{item.qty}}</span>
                <button v-show="appear2" class="btn btn-success" @click="minusItem(item.Product.id, item.qty, item)">-</button>
                <div class="col">
                    <button class="btn btn-danger" style="margin-top:10px" @click="removeItem(item.Product.id)">remove</button>
                </div>
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
  name: 'CartList',
  props: ['carts'],
  data () {
    return {
      appear: true,
      appear2: true
    }
  },
  methods: {
    removeItem (productId) {
      const payload = {
        id: productId
      }
      this.$store.dispatch('removeItem', payload)
    },
    plusItem (productId, qty, item) {
      if (item.qty >= item.Product.stock) {
        this.appear = false
      } else {
        this.appear = true
        const payload = {
          id: productId,
          qty: qty + 1
        }
        console.log(payload)
        this.$store.dispatch('updateItem', payload)
      }
    },
    minusItem (productId, qty, item) {
      if (item.qty <= 0) {
        this.appear2 = false
      } else {
        this.appear = true
        const payload = {
          id: productId,
          qty: qty - 1
        }
        console.log(payload)
        this.$store.dispatch('updateItem', payload)
      }
    }
  }
}
</script>

<style>

</style>
