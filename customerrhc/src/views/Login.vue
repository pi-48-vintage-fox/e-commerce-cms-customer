<template>
  <div>
    <div class="banner-bg banner-bg2">
      <div class="container">
        <div class="header">
          <div class="logo">
            <a href="/login"><img src="rhc1.png" alt="" width="100px"/></a>
          </div>
          <LoginNav />
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
            <a class="morebtn" href="#">BREW NOW</a>
          </div>
        </div>
      </div>
      <div class="dwn">
        <a class="scroll" href="#cate"
          ><img src="images/scroll.png" alt=""
        /></a>
      </div>
    </div>
    <!--/banner-->
    <div id="cate" class="categories">
      <div class="container">
        <h3>CATEGORIES</h3>
        <div class="categorie-grids">
          <a href="#"
            ><div class="col-md-4 cate-grid grid1">
              <h4>BEANS</h4>
              <p>Are you ready to have your own coffeeshop at home ?</p>
              <a class="store" href="#">GO TO STORE</a>
            </div></a
          >
          <a href="#"
            ><div class="col-md-4 cate-grid grid2">
              <h4>BEVERAGES</h4>
              <p>Our Signatures beverages are just a click away</p>
              <a class="store" href="#">GO TO STORE</a>
            </div></a
          >
          <a href="#"
            ><div class="col-md-4 cate-grid grid3">
              <h4>TOOLS</h4>
              <p>Brewing never been this easy and fun</p>
              <a class="store" href="#">GO TO STORE</a>
            </div></a
          >
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!--coffess-->
     <div class="coffees">
	 <div class="mountain-sec">
		 <h2>OUR PRODUCT</h2>
			 <coffeeCard> </coffeeCard>
			 <div class="clearfix"></div>
		</div>
	</div>
    <!---->
    <!-- <div class="contact">
      <div class="container">
        <h3>CONTACT US</h3>
        <p>Please contact us for all inquiries and purchase options.</p>
        <form>
          <input type="text" placeholder="NAME" required="" />
          <input type="text" placeholder="SURNAME" required="" />
          <input
            class="user"
            type="text"
            placeholder="USER@DOMAIN.COM"
            required=""
          /><br />
          <textarea placeholder="MESSAGE"></textarea>
          <input type="submit" value="SEND" />
        </form>
      </div>
    </div> -->
    <!---->
    <div class="footer">
      <div class="container wrap">
        <div class="logo2">
          <a href="#"><img src="rhc1.png" alt="" width="50px" height="50px"/></a>
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
// @ is an alias to /src
import LoginNav from '../components/LoginNav'
import CoffeeCard from '../components/CoffeeCard2'

export default {
  name: 'Login',
  components: {
    LoginNav,
    CoffeeCard
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
}
</script>
