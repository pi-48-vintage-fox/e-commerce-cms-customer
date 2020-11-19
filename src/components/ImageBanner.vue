<template>
<div class="item">
    <img :src="banner.image_url" id="slide-banner">
</div>
</template>

<script>
export default {
  name: 'ImageBanner',
  props: ['banner']
}
</script>

<style>

</style>
