<template>
  <div>
    <div class="card mb-3" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="cart.Product.image_url" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{cart.Product.name}}</h5>


            <div class="row justify-content-center">
              <div class="col md-2">
              <button type="button" class="btn btn-outline-secondary">-</button>
              </div>
              <div class="col md-2">
              <p>0</p>
              </div>
              <div class="col md-2">
              <button type="button" class="btn btn-outline-success">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart-form",
  props: ["cart"],
};
</script>

<style>
</style>