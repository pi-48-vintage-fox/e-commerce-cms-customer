<template>
  <div class="home">
      <NavBar></NavBar>
      <Carousel/>
      <h2 style="color: white;" class="mt-3">PROUCTS</h2>
      <div class="container">
        <div class="row">
            <Card
              v-for="prod in products"
              :key="prod.id"
              :prod="prod"
            />
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Carousel from '@/components/Carousel.vue'
import Card from '@/components/Card.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    Carousel,
    Card
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    return this.fetchProducts()
  }
}
</script>
