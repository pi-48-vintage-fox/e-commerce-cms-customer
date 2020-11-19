<template>
  <!-- carousell -->
    <div class="hello">
        <div id="banner">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <SlideNumberBanner v-for="banner in filterBanner" :key="banner.id" :banner="banner"/>
            </ol>

            <div class="carousel-inner">
              <!-- default web banner -->
              <div class="item active">
                <img src="https://houseofbamboo.com.au/wp-content/uploads/2016/10/Banner-E-commerce-launch.jpg" id="slide-banner">
              </div>
              <ImageBanner v-for="banner in filterBanner" :key="banner.id" :banner="banner"/>
            </div>

            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
</template>

<script>
import SlideNumberBanner from '../components/SlideNumberBanner'
import ImageBanner from '../components/ImageBanner'
export default {
  name: 'Banner',
  props: ['filterBanner'],
  components: {
    SlideNumberBanner,
    ImageBanner
  }
}
</script>

<style>

</style>
