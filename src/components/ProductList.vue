<template>
  <div class="row">
    <div class="col-sm-3 mb-3" v-for="item in products" :key="item.id">
      <div class="card-body">
        <div class="card border-2">
          <img :src="`${item.image_url}`" class="card-img-top" />
          <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                {{ item.name }}
              </li>
              <li class="list-group-item ">
                Rp {{ item.price.toLocaleString() }}
              </li>
              <li class="list-group-item">
                Stock {{ item.stock }}
              </li>
              <li class="list-group-item">
                <button class="btn btn-outline-danger" @click="addCart(item.id)">
                  Add To Cart
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productList',
  props: ['products'],
  methods: {
    addCart (productId) {
      const payload = {
        id: productId,
        qty: 1
      }
      this.$store.dispatch('addCart', payload)
    }
  }

}
</script>

<style>

</style>
