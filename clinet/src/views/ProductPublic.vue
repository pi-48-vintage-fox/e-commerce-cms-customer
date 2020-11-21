<template>
  <div class="container">
    <div class="container-fluid pt-3">
      <h3 class="font-weight-light text-white fab fa-10x">Shopee</h3>
      <div class="row flex-row flex-sm-nowrap py-3">
        <ListProduct/>
      </div>
    </div>
  </div>
</template>

<script>
import ListProduct from '../components/ListProductPublic';
export default {
  name: "productPublic",
};
</script>
