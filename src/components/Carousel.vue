<template>
  <div class="banner">
    <div class="container pt-5">
    <div class="row">
      <div class="col-6">
        <div class="jumbotron jumbotron-fluid bg-transparent">
            <h1>{{ title }}</h1>
            <hr>
        </div>
      </div>
      <div class="col-6">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="../assets/banner.jpg" alt="Second slide">
              </div>
              <div v-for="banner in banners" :key="banner.id" class="carousel-item">
                <img class="d-block w-100" :src="banner.image_url" alt="First slide">
              </div>
            </div>
            <div class="container">
              <div class="row mx-auto">
                <div class="col-1">
                  <div class="button-slide">
                    <div class="carousel-control">
                      <a class="carousel-control-prev d-flex align-items-end ml-3" href="#carouselExampleControls" role="button" data-slide="prev">
                          <span class="fas fa-angle-left" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next d-flex align-items-end mr-3" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="fas fa-angle-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                  </div>
                </div>
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
  name: 'Carousel',
  methods: {
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    }
  },
  computed: {
    title () {
      return this.$store.state.title
    },
    banners () {
      return this.$store.state.banners
    }
  },
  created () {
    return this.fetchBanner()
  }
}
</script>

<style scoped>
  .banner{
    background-color: rgba(220, 221, 225,1.0);
    height: 533px;
    padding-top: 68px;
  }
  h1 {
    font-weight: 800;
    letter-spacing: 33px;
    color: rgba(34, 47, 62,1.0);
  }
  hr {
    background-color: rgba(232, 65, 24,0.7);
    padding: 3px;
    width: 190px;
    border-radius: 50px;
    margin-left: 0;
  }
  .fa-angle-left,
  .fa-angle-right {
    color: white;
    height: 50px;
    width: 50px !important;
    padding: 15px;
  }
  img {
    height: 200px;
  }
  .button-slide {
    width: 70px;
    height: 50px;
    background-color: rgba(232, 65, 24,0.7) !important;
    position: absolute;
    bottom: 0;
    left: -15px;
    transition: .3s;
  }
  .button-slide:hover {
    background-color: rgba(232, 65, 24,1.0) !important;
  }
</style>
