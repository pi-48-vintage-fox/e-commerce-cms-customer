<template>
    <div class="col-3">
      <div
        class="card mx-auto my-4"
        style="width: 13rem; height: 400px; margin-bottom"
      >
        <img :src="product.image_url" class="card-img-top" alt="..." />
        <div class="card-body card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <h6 class="card-title">{{ product.price }}</h6>
          <p class="card-text">{{ product.stock }}</p>
          <!-- <p class="card-text">{{ product.status }}</p> -->
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      <button type="button" class="btn btn-info">Add to Cart</button>
      </div>
    </div>
</template>

<script>
export default {
  name: "product-form",
  props: ["product"],
};
</script>

<style>
</style>