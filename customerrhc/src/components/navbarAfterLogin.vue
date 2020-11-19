<template>
  <div class="banner-bg banner-bg3">
      <div class="container">
        <div class="header">
          <div class="logo">
            <a @click.prevent="backHome"><img src="rhc1.png" alt="" width="100px" /></a>
          </div>
          <div class="top-nav">
            <label class="mobile_menu" for="mobile_menu">
              <span>Menu</span>
            </label>
            <input id="mobile_menu" type="checkbox" />
            <ul class="nav bg-dark">
              <li class="dropdown1">
                <a>Categories</a>
                <ul class="dropdown2">
                  <li><a href="#">Beans and Other Condiments</a></li>
                  <li><a href="#">Coffee Beverages</a></li>
                  <li><a href="#">Tools</a></li>
                </ul>
              </li>
              <li>
                <a @click.prevent="gotoProduct">Products</a>
              </li>
              <li>
                <a
                  ><p>Hi, {{ username }}</p></a
                >
              </li>
              <li>
                <a class="store" href="#" @click.prevent="logout">Logout</a>
              </li>
              <!-- goto cart -->
              <a class="shop" @click.prevent="gotoCart"
                ><img src="images/cart.png" alt=""
              /></a>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <!--  -->
      <div class="caption">
        <div class="slider">
          <div class="callbacks_container">
            <ul class="rslides" id="slider">
              <li><h1>ARABICA AND ROBUSTA BEANS</h1></li>
              <li><h1>BEVERAGES</h1></li>
              <li><h1>MANUAL BREW TOOLS</h1></li>
            </ul>
            <p>
              Good <span>quality</span> coffee <span>to</span> accompany
              <span>your energetic days</span>
            </p>
            <a class="morebtn" href="/products">BREW NOW</a>
          </div>
        </div>
      </div>
      <div class="dwn">
        <a class="scroll" href="#cate"
          ><img src="images/scroll.png" alt=""
        /></a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'navbarHome',
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("access_token");
      localStorage.removeItem("role");
      localStorage.removeItem("username");
      this.$router.push("/login");
    },
    backHome () {
      this.$router.push('/')
    },
    gotoProduct () {
      this.$router.push('/products')
    },
    gotoCart () {
      this.$router.push('/cart')
    }
  },
}
</script>

<style>

</style>