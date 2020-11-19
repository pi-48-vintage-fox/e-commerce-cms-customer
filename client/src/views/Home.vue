<template>
  <div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide mt-2"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item active"
          v-for="banner in getBanner"
          :key="banner.id"
        >
          <img :src="banner.image_url" class="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container">
      <div class="row d-flex justify-content-around">
        <Content
          v-for="product in getAllProduct"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Content from '../components/Content.vue'
export default {
  name: 'Home',
  components: {
    Content
  },
  computed: {
    getAllProduct () {
      return this.$store.state.allProduct
    },
    getBanner () {
      return this.$store.state.banner
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    }
  },
  created () {
    this.fetchProduct()
    this.fetchBanner()
  }
}
</script>
