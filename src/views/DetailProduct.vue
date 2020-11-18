<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">{{ product.name }}</h5>
          </div>
          <div class="card-body">
            <img :src="product.image_url" alt="" class="card-img h-100">
            <form @submit.prevent="addToCart" class="mt-5">
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <input v-model="stock" type="number" class="form-control">
                  </div>
                </div>
                <div class="col-6">
                  <button type="submit" class="btn btn-primary">Checkout</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      stock: ''
    }
  },
  methods: {
    getProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('getProductById', id)
    },
    buy () {
      const id = this.$route.params.id
      const buyProduct = {
        id: +id,
        stock: this.stock
      }
      this.$store.dispatch('buy', buyProduct)
        .then(({ data }) => {
          this.$router.push(`/detail/${id}/checkout`)
        })
        .catch(err => {
          if (err.response.status === 500) {
            this.$router.push({ name: 'Login' })
          }
        })
    },
    addToCart () {
      const accessToken = localStorage.getItem('access_token')
      const payload = {
        ProductId: this.product.id,
        qty: this.stock
      }
      console.log(payload)
      this.$store.dispatch('addCart', payload)
        .then(({ data }) => {
          if (!accessToken) {
            this.$router.push({ name: 'Login' })
          }
        })
        .catch(console.log)
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  created () {
    this.getProductById()
  }
}
</script>

<style scoped>
  .card {
    margin-top: 133px;
  }
</style>
