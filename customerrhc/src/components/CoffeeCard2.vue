<template>
<div>
  <a v-for="product in $store.state.products" :key="product.id" >
    <div class="coffee">
      <img :src=product.image_url alt="" />
      <div class="coffee-cost">
        <div class="coffee-mdl">
          <h4>{{product.name}}<span><a>Rp{{product.price}} {{product.stock}} pcs. </a></span></h4>
        </div>
        <div class="coffee-cart">
          <a class="buy" @click.prevent="buyProduct(product)">BUY NOW</a>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="fast-viw">
        <a href="single.html">Quick View</a>
      </div>
    </div>
  </a>
</div>
</template>

<script>
export default {
  name: "coffeeCard",
  methods: {
    buyProduct(product){
      this.$store.dispatch('buyProduct', product)
      .then(()=>{
        return this.$store.dispatch('showCart')
      })
      .then(()=>{
        this.$router.push('/cart')
      })
    }
  }
};
</script>

<style>
</style>