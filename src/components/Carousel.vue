<template>
  <agile @after-change="e => currentSlide = e.currentSlide" :navButtons=false>
      <div class="slide" v-for="slide in banners" :key=slide.id>
        <img :src="slide.image_url">
      </div>
      <template slot="caption">
        <h2 class="is-2 title">{{ banner.caption }}</h2>
        <h5 class="is-5 subtitle mt-2">{{ banner.sub_caption }}</h5>
        <router-link :to=banner.link class="button">SHOP NOW</router-link>
      </template>
  </agile>
</template>

<script>
import { VueAgile } from 'vue-agile'
export default {
  name: 'Carousel',
  components: {
    agile: VueAgile
  },
  computed: {
    banner () {
      const captions = this.$store.state.banners[this.currentSlide]
      return captions
    },
    banners () {
      return this.$store.state.banners
    }
  },
  data () {
    return {
      currentSlide: 0,
      subCaptions: [
        'WE OFFER PACKAGING OF ANY MATERIALS',
        'WE ARE ALWAYS HERE TO HELP YOU',
        'YOUR GIFT WILL BE HARD TO MISS'
      ],
      buttonLink: [
        '/cardboard-box',
        '/about',
        '/pallet'
      ]
    }
  },
  beforeCreate () {
    this.$store.dispatch('fetchBanners')
  }
}
</script>

<style>
.agile__dots {
  bottom: 10px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: row;
  position: absolute;
  bottom: 40px;
  left:48%;
}
.agile__dot {
  margin: 0px 5px;
}
.agile__dot button {
  background-color:rgb(161, 161, 161);
  cursor: pointer;
  display: block;
  border:none;
  height: 5px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  width: 22px;
  transition:250ms;
}
.agile__dot--current button, .agile__dot:hover button {
  background-color: rgb(88, 88, 88);
  height:10px;
  transition:250ms;
}
.agile__caption{
    position: absolute;
    top: 20%;
    left: 15%;
    /* font-size: 0.8em; */
    max-width: 30%;
}

</style>
