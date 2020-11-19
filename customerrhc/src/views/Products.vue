<template>
<div>
 <div class="banner-bg banner-sec">
	  <div class="container">
			 <div class="header">
			  	<navbarA />
			 </div>
	  </div>
  </div>
  
  <div class="coffees">
	 <div class="mountain-sec">
		 <h2>OUR PRODUCT</h2>
			 <coffeeCard> </coffeeCard>
			 <div class="clearfix"></div>
		</div>
	</div>
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
  </div>
</template>

<script>
import navbarA from '../components/navbarProduct'
import coffeeCard from '../components/CoffeeCard2'
export default {
	name: 'Products',
	components: {
		navbarA,
		coffeeCard
	}
}
</script>

<style>
</style>
