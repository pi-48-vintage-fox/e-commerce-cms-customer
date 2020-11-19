<template>
  <a-carousel autoplay class="mt-3">
    <div class="banner"></div>
    <div class="banner-2"></div>
    <div class="banner-3"></div>
    <div class="banner-4"></div>
  </a-carousel>
</template>
<script>
export default {
  name: 'Carousel'
}
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 600px;
  line-height: 600px;
  overflow: hidden;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.banner {
  background-image: url('http://javacoffee.info/wp-content/uploads/2019/09/banner-kopi.jpg');
  background-size: cover;
  height: 100vh;
}
.banner-2 {
  background-image: url('https://scontent.fcgk9-1.fna.fbcdn.net/v/t31.0-8/21273542_1907580172828145_3512315814710130738_o.jpg?_nc_cat=102&ccb=2&_nc_sid=dd9801&_nc_ohc=C_RH1CoPQ4QAX9G-C8Z&_nc_ht=scontent.fcgk9-1.fna&oh=f84cf3e66ba1b8fe4882b63023030d2c&oe=5FDB159C');
  background-size: cover;
  height: 100vh;
}
.banner-3 {
  background-image: url('https://i.pinimg.com/originals/7d/5b/b8/7d5bb8863f6560c350a0f6e0b651f88a.png');
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover
}
.banner-4 {
  background-image: url('https://cdn.pixabay.com/photo/2017/07/26/21/14/spilled-coffee-2543133_960_720.jpg');
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover
}
</style>
