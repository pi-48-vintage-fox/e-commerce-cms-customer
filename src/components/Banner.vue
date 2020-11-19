<template>
  <carousel :per-page="1" @slideclick="handleSlideClick">
    <slide v-for="banner in banners" :key="banner.id">
      <img :src="banner.imageUrl" />
      <!-- <img src="http://plant.engotheme.com/wp-content/uploads/2018/09/11.jpg" />
    </slide>
    <slide>
      <img src="http://plant.engotheme.com/wp-content/uploads/2018/09/10.jpg" /> -->
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'Banner',
  components: {
    Carousel,
    Slide,
  },
  methods: {
    handleSlideClick(dataset) {
      console.log(dataset.index, dataset.name)
    },
  },

  computed: {
    banners() {
      return this.$store.state.banners
    },
  },
}
</script>

<style></style>
