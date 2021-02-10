<template>
  <carousel
    :per-page="1"
    @slideclick="handleSlideClick"
    :autoplay="true"
    :loop="true"
    :paginationColor="`#aaa`"
    :paginationPosition="`bottom-overlay`"
  >
    <slide v-for="banner in banners" :key="banner.id">
      <img class="banner-img" :src="banner.imageUrl" />
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
