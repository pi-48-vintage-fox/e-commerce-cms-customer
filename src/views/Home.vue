<template>
  <div class="main">
    <carousel/>

    <div class="container">
      <div class="columns mt-5">
        <div class="column is-half">
          <h3 class="is-3 title">
            Everything You Need<br/>
            To Create Personal Gift Package
          </h3>
          <h5 class="is-5 subtitle text-space3 mt-1">
            WE'LL LEAVE THE CREATIVE SIDE TO YOU
          </h5>
            <a href="#" class="button btn-tan text-space3">SHOP NOW</a>
        </div>
        <div class="column is-half">
          <div class="promo">
            <img src="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner_countdown_col_7_652x325_crop_top.png?v=1548087967" alt="">
            <div class="promo-caption">
              <h3 class="is-3 title has-text-weight-light text-space2">
                SPECIAL OFFER
              </h3>
              <h1 class="is-1 title">20 % OFF</h1>
              <h4 class="is-4 title has-text-weight-light">
                WITH MINIMAL ORDER OF 200K
              </h4>
              <a href="#" class="button text-space3 btn-tan">SHOP NOW</a>
            </div>
           </div>
        </div>
      </div>
      <div class="columns is-multiline">
        <category-card
          caption="PAPER"
          ImageUrl="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner33_1_370x497_crop_top.png?v=1547809580"/>
        <category-card
          caption="PLASTIC"
          ImageUrl="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner33_2_370x497_crop_top.png?v=1547809583"/>
        <category-card
          caption="RIBBON"
          ImageUrl="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner33_3_370x497_crop_top.png?v=1547809585"/>
        <category-card
          caption="FOOD"
          ImageUrl="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner33_4_370x497_crop_top.png?v=1547809705"/>
        <category-card
          caption="FOOD"
          ImageUrl="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner33_4_370x497_crop_top.png?v=1547809705"/>
        <category-card
          caption="FOOD"
          ImageUrl="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner33_4_370x497_crop_top.png?v=1547809705"/>
      </div>
      <div class="columns mt-5 mb-5">
        <div class="column is-half">
          <div class="promo">
            <img src="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner_countdown_col_7_652x325_crop_top.png?v=1548087967" alt="">
            <div class="promo-caption">
              <h3 class="is-3 title has-text-weight-light text-space2">
                DISINI CERITANYA
              </h3>
              <h1 class="is-1 title">20 % OFF</h1>
              <h4 class="is-4 title has-text-weight-light">
                PROMO LAGI
              </h4>
              <a href="#" class="button text-space3 btn-tan">SHOP NOW</a>
            </div>
           </div>
        </div>
        <div class="column is-half" style="text-align:right;">
          <h3 class="is-3 title">
            Everything You Need<br/>
            To Create Personal Gift Package
          </h3>
          <h5 class="is-5 subtitle text-space3 mt-1">
            WE'LL LEAVE THE CREATIVE SIDE TO YOU
          </h5>
            <a href="#" class="button btn-tan text-space3">SHOP NOW</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import CategoryCard from '../components/CategoryCard.vue'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Carousel,
    CategoryCard
  }
}
</script>
