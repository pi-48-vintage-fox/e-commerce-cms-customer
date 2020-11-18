<template>
  <agile @after-change="e => currentSlide = e.currentSlide" :navButtons=false>
      <div class="slide">
        <img src="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/slide1_2048x755_crop_top.png?v=1547809197" alt="">
      </div>
      <div class="slide">
        <img src="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/slide_2_2048x755_crop_top.png?v=1547809193" alt="">
      </div>
      <div class="slide">
        <img src="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/slide_3_2048x755_crop_top.png?v=1547809195" alt="">
      </div>
      <template slot="caption">
        <h2 class="is-2 title">{{ captions[currentSlide] }}</h2>
        <h5 class="is-5 subtitle mt-2">{{ subCaptions[currentSlide] }}</h5>
        <router-link :to=buttonLink[currentSlide] class="button">SHOP NOW</router-link>
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
  data () {
    return {
      currentSlide: 0,
      captions: [
        'The Complete Packaging Supplies Store',
        'Customized Packaging for Your Business',
        'Any Box for Bottles Can Transform Into a Gift Box'
      ],
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
