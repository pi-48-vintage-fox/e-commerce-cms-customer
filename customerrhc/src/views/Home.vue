<template>
  <div>
    <navbarHome />
    <!-- /banner -->
    <Banner></Banner>

    <!--coffess-->
    <!-- <div class="coffees">
      <h3>OUR PRODUCTS</h3>
      <div class="coffees-grids">
        <ul id="flexiselDemo1">
          <CoffeeCard v-for="product in $store.state.products" :key="product.id" :product="product" />
          <li v-for="product in $store.state.products" :key="product.id">
            <img src="images/bik1.jpg" alt="" />
            <div class="coffee-info">
              <div class="model">
                <h4>{{ product.name }}<span>$249.00</span></h4>
              </div>
              <div class="model-info">
                <select>
                  <option value="volvo">OPTION</option>
                  <option value="saab">Option</option>
                  <option value="opel">Option</option>
                  <option value="audi">Option</option>
                </select>
                <a href="bicycles.html">BUY</a>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="viw">
              <a href="bicycles.html">Quick View</a>
            </div>
          </li>
        </ul>
      </div>
    </div> -->

    <div class="footer">
      <div class="container wrap">
        <div class="logo2">
          <a href="#"
            ><img src="rhc1.png" alt="" width="50px" height="50px"
          /></a>
        </div>
        <div class="ftr-menu">
          <ul>
            <li><a>All right reserved Rossi House Coffee (2020)</a></li>
          </ul>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
import Banner from "../components/banner.vue";
import CoffeeCard from "../components/CoffeeCard";
import navbarHome from "../components/navbarAfterLogin"
export default {
  name: "Home",
  components: {
    Banner,
    CoffeeCard,
    navbarHome
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style>
</style>
