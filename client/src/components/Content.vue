<template>
    <div class="card col-3 mt-5">
      <img :src="product.image_url" class="card-img-top " alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <h5 class="card-title">Rp. {{ formatToRupiah }},-</h5>
        <h5 class="card-title">Stock : {{ product.stock }}</h5>
        <h5 class="card-title">Category : {{ product.Category.name }}</h5>
        <a
          href="#"
          @click.prevent="addToCart(product.id)"
          class="btn btn-primary"
          >Add To cart</a
        >
      </div>
    </div>
</template>

<script>
export default {
  name: 'Content',
  props: ['product'],
  computed: {
    formatToRupiah () {
      const angka = this.product.price
      var reverse = angka.toString().split('').reverse().join('')
      var ribuan = reverse.match(/\d{1,3}/g)
      ribuan = ribuan.join('.').split('').reverse().join('')
      return ribuan
    }
  },
  methods: {
    addToCart (idProduct) {
      if (!localStorage.getItem('access_token')) {
        this.$router.push('/login')
      } else {
        this.$store.dispatch('addToCart', idProduct)
        this.fetchCart ()
        this.$router.push('/cart')
      }
    },
     fetchCart () {
          this.$store.dispatch('fetchCart')
      },
  }
}
</script>

<style>

.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
</style>
