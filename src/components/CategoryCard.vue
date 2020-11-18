<template>
  <div class="column is-one-quarter category-card" >
    <img :src="ImageUrl" alt="">
    <div class="category-caption">
      <h5 class="title is-5 has-text-weight-light text-space" style="padding:0;margin:0;">
      {{caption}}
      </h5>
      <router-link to="/">SHOP NOW</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: ['ImageUrl', 'caption']
}
</script>
