<template>
  <div class="container">
    <div class="row row-cols-5">
      <div class="col mt-4 mb-4" v-for="product in $store.state.products" :key="product.id">
          <div class="card">
            <div class="border-bottom">
              <img :src="product.image_url" class="mx-auto m-3" alt="">
            </div>
            <div class="mt-3">
              <p class="name">{{ product.name }}</p>
              <p class="price">Rp{{ product.price.toLocaleString('id-ID') }}</p>
              <div class="stock mb-2">
                <p class="i"><small>stock:</small> {{ product.stock }}</p>
                <button type="button" @click="cartMethod(product.id)" class="btn btn-secondary material-icons mr-2">add_shopping_cart</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      quantity: 1
    }
  },
  methods: {
    cartMethod (productId) {
      // this.$store.commit('setProduct_stock', stockProduct)
      const { quantity } = this
      this.$store.dispatch('cartById', { productId, quantity })
    }
  }
}
</script>
 <style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@700&family=Crimson+Text:wght@400;600&family=Modak&family=Patua+One&family=Yanone+Kaffeesatz:wght@200;500;600;700&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
  .name {
    font-family: 'Noto Serif JP', serif;
    font-size: 0.9rem;
  }
  img{
    width: 10rem;
    height: 10rem;
  }
  .stock{
    display: flex;
    justify-content: space-around;
  }
  .price {
    font-size: 1.5rem;
    font-family: 'Big Shoulders Stencil Text', cursive;
    font-family: 'Crimson Text', serif;
    font-family: 'Modak', cursive;
    font-family: 'Patua One', cursive;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    text-align: left;
    margin-left: 0.5rem;
  }
  .material-icons {
    color: white;
  }
  .card:hover {
    box-shadow: 2px 1px 1px 1px grey;
  }
  small {
    color: #dcdde1;
    font-family: 'Fredoka One', cursive;
  }
 </style>
