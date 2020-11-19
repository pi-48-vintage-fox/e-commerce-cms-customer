<template>
<div>
<div class="card mb-3 " style="max-width: 540px; ">
  <div class="row no-gutters justify-content-center" v-for="item in carts" :key="item.id">
    <div class="col-md-4">
      <img :src="`${item.Product.image_url}`" class="card-img" >
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{item.Product.name}}</h5>
        <p class="card-text">RP. {{item.Product.price * item.qty}}</p>
        <div class="row justify-content-between">
            <div class="col">
                <button class="btn btn-success">+</button>
                <span class="card-text" style="margin-left:10px; margin-right:10px">{{item.qty}}</span>
                <button class="btn btn-success">-</button>
                <div class="col">
                    <button class="btn btn-danger" style="margin-top:10px">remove</button>
                </div>
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
  name: 'CartList',
  props: ['carts']
}
</script>

<style>

</style>
