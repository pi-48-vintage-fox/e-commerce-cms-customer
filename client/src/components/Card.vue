<template>
     <div class="col-4 mt-3 col-card">
      <div class="card-container shadow-lg rounded">
        <div class="img">
          <img :src="prod.image_url" width="180" height="180">
        </div>
        <div class="title-text ml-3">
            {{prod.name}}
        </div>
        <div class="price mt-1 ml-3">
          Price: Rp {{prod.price.toLocaleString('id-ID')}}
        </div>
        <div class="stock mt-1 ml-3">
          Stock: {{prod.stock}}
        </div>
        <div class="btn-cart mt-2">
            <button class="btn btn-primary btn-sm" style="width: 100%" @click.prevent="addToCarts">Add to Cart</button>
        </div>
        <div class="btn-wish mt-2">
            <button class="btn btn-danger btn-sm" style="width: 100%">Add to Wish List</button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "Card",
  props: ['prod'],
  methods: {
    addToCarts () {
      console.log('terekan')
      const payload = {
        productId: this.prod.id,
        quantity: 1,
      }
      this.$store.dispatch('addToCarts', payload)  
    }
  }
};
</script>
<style>
.card-container {
  width:  300px;
  height: 350px;
  background-color: #ffffff
}
.title-text {
  text-align: justify;
}
.price {
  text-align: justify;
}
.stock {
  text-align: justify
}
.icon {
  cursor: pointer;
}
.btn-cart {
  width: 80%;
  margin-left: auto;
  margin-right: auto 
}
.btn-wish {
  width: 80%;
  margin-left: auto;
  margin-right: auto 
}
</style>


