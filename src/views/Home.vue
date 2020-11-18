<template>
  <div class="main">
    <carousel/>

    <div class="container">
      <div class="columns">
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
