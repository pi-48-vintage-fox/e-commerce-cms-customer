<template>
  <li data-target="#myCarousel" :data-slide-to="banner.id"></li>
</template>

<script>
export default {
  name: 'SlideNumberBanner',
  props: ['banner']
}
</script>

<style>

</style>
