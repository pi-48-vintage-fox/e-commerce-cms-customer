<template>
  <div>
    <div class="banner-bg banner-sec">
      <div class="container">
        <div class="header">
          <navbarA />
        </div>
      </div>
    </div>
    <!--/banner-->
    <div class="cart">
	 <div class="container">

		 <div class="col-md-9 cart-items" >
			 <h2>My Shopping Bag ({{$store.state.cart.showCart.length}})</h2>
			 <div class="cart-header" >
				 <div class="cart-sec" v-for="(cart,i) in $store.state.cart.showCart" :key="cart.id">
						<div class="cart-item cyc">
							 <img :src="cart.image_url"/>
						</div>
					   <div class="cart-item-info">
							 <h3>{{cart.name}}</h3>
							 <h4><span>Rp.</span>{{cart.price}}</h4>
							 <p class="qty">Qty ::</p>
							 <form @submit.prevent="editCart(cart.id,i)">
							 	<input min="1" type="number" id="quantity" name="quantity" class="form-control input-small" v-model="cart.Cart.quantity">
								<button type="submit">Update</button>
							 </form>
							 
					   </div>
					   <div class="clearfix"></div>
						<div class="delivery">
							<button class="btn btn-sm btn-danger" @click="del(cart.id)">Cancel Order</button>
							 <p>Service Charges:: free</p>
							 <span>Delivered in 2 bussiness days</span>
							 <div class="clearfix"></div>
				        </div>
				  </div>
			 </div>
		 </div>

		 <!-- <div class="col-md-3 cart-total">
			 <a class="continue" href="#">Continue to basket</a>
			 <div class="price-details">
				 <h3>Price Details</h3>
				 <span>Total</span>
				 <span class="total">6200.00</span>
				 <span>Discount</span>
				 <span class="total">---</span>
				 <span>Delivery Charges</span>
				 <span class="total">150.00</span>
				 <div class="clearfix"></div>
			 </div>
			 <h4 class="last-price">TOTAL</h4>
			 <span class="total final">6350.00</span>
			 <div class="clearfix"></div>
			 <a class="order" href="#">Place Order</a>
			 <div class="total-item">
				 <h3>OPTIONS</h3>
				 <h4>COUPONS</h4>
				 <a class="cpns" href="#">Apply Coupons</a>
				 <p><a href="#">Log In</a> to use accounts - linked coupons</p>
			 </div>
			</div> -->
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
export default {
	name: 'Cart',
	components :{
		navbarA
	},
	data () {
		return {
			quantity: []
		}
	},
	methods:{
		editCart (id,i){
			console.log(this.cartQuantity[i])
			this.$store.dispatch('editCart', {quantity:this.cartQuantity[i],id})
				.then((data) => {
					this.$store.dispatch('showCart')
					})
					.catch(err => {
						console.log(err)
						this.errorMessage = err
					})
		},
		del(id){
			console.log(id)
			this.$store.dispatch('delCart',{ProductId:id})
			 .then(()=>{
				 this.$store.dispatch('showCart')
			 })
			 .catch(err=>{
				 console.log(err)
			 })
		}
	},
	computed: {
		cartQuantity (){
			// console.log('a')
			for (let i = 0 ; i <= this.$store.state.cart.showCart.length-1; i ++) {
				this.quantity[i] = this.$store.state.cart.showCart[i].Cart.quantity
			}
			return this.quantity
		}
	},
	created () {
		this.$store.dispatch('showCart')
	}
}
</script>

<style>
</style>
