<template>
  <div class="main">
    <carousel/>

    <div class="container">
      <div class="columns mt-5">
        <h3 class="title is-3 ml-3">
          Our Products
        </h3>
      </div>

      <div class="columns is-multiline mt-1">
        <product-card v-for="product in products" :key='product.id' :product=product></product-card>
      </div>
      <div class="columns mt-5 not-implemented" >
        <div class="not-implemented-overlay">
          <h2 class="title is-2">NOT YET IMPLEMENTED</h2>
          <h3 class="subtitle is-3">&#128557;</h3>
        </div>
        <div class="column is-half">
          <h3 class="is-3 title">
            Everything You Need<br/>
            To Create Personal Gift Package
          </h3>
          <h5 class="is-5 subtitle text-space3 mt-1">
            WE'LL LEAVE THE CREATIVE SIDE TO YOU
          </h5>
            <a href="#" class="button btn-tan text-space3">SHOP NOW</a>
        </div>
        <div class="column is-half">
          <div class="promo">
            <img src="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner_countdown_col_7_652x325_crop_top.png?v=1548087967" alt="">
            <div class="promo-caption">
              <h3 class="is-3 title has-text-weight-light text-space2">
                SPECIAL OFFER
              </h3>
              <h1 class="is-1 title">20 % OFF</h1>
              <h4 class="is-4 title has-text-weight-light">
                WITH MINIMAL ORDER OF 200K
              </h4>
              <a href="#" class="button text-space3 btn-tan">SHOP NOW</a>
            </div>
           </div>
        </div>
      </div>
      <div class="columns is-multiline not-implemented">
        <div class="not-implemented-overlay">
          <h2 class="title is-2">NOT YET IMPLEMENTED</h2>
          <h3 class="subtitle is-3">&#128557;</h3>
        </div>
        <category-card
          caption="PAPER"
          ImageUrl="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner33_1_370x497_crop_top.png?v=1547809580"/>
        <category-card
          caption="PLASTIC"
          ImageUrl="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner33_2_370x497_crop_top.png?v=1547809583"/>
        <category-card
          caption="RIBBON"
          ImageUrl="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner33_3_370x497_crop_top.png?v=1547809585"/>
        <category-card
          caption="FOOD"
          ImageUrl="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner33_4_370x497_crop_top.png?v=1547809705"/>
        <category-card
          caption="FOOD"
          ImageUrl="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner33_4_370x497_crop_top.png?v=1547809705"/>
        <category-card
          caption="FOOD"
          ImageUrl="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner33_4_370x497_crop_top.png?v=1547809705"/>
      </div>

      <div class="columns mt-5 mb-5 not-implemented">
        <div class="not-implemented-overlay">
          <h2 class="title is-2">NOT YET IMPLEMENTED</h2>
          <h3 class="subtitle is-3">&#128557;</h3>
        </div>
        <div class="column is-half">
          <div class="promo">
            <img src="https://cdn.shopify.com/s/files/1/0203/6554/1476/files/banner_countdown_col_7_652x325_crop_top.png?v=1548087967" alt="">
            <div class="promo-caption">
              <h3 class="is-3 title has-text-weight-light text-space2">
                DISINI CERITANYA
              </h3>
              <h1 class="is-1 title">20 % OFF</h1>
              <h4 class="is-4 title has-text-weight-light">
                PROMO LAGI
              </h4>
              <a href="#" class="button text-space3 btn-tan">SHOP NOW</a>
            </div>
           </div>
        </div>
        <div class="column is-half" style="text-align:right;">
          <h3 class="is-3 title">
            Everything You Need<br/>
            To Create Personal Gift Package
          </h3>
          <h5 class="is-5 subtitle text-space3 mt-1">
            WE'LL LEAVE THE CREATIVE SIDE TO YOU
          </h5>
            <a href="#" class="button btn-tan text-space3">SHOP NOW</a>
        </div>
      </div>
    </div>
    <sweet-modal ref='modal'>
      <h4 class="subtitle is-4">Register an Account</h4>
      <div class="field">
        <label class="label">Full Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Full Name" v-model="register.name">
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="Email" v-model="register.email">
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="Password" v-model="register.password">
        </div>
      </div>
      <div class="field">
        <a class="button btn-tan" @click.prevent="registerUser">Register</a>
      </div>
    </sweet-modal>
    <sweet-modal ref='modal_login'>
      <div class="columns">
        <div class="column">
          <h5 class="title is-5">Please login to first</h5>
        </div>
      </div>
      <div class="columns">
        <div class="column">
           <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="Username" v-model="login.email">
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="Password" v-model="login.password">
            </div>
          </div>
          <div class="field">
            <button class="button btn-tan" @click.prevent="doLogin">Sign in</button>
          </div>
          <div class="field">
            <p class="is-size-7">Need account ?
              <a @click.prevent='openRegisterModal'> Register </a>
            </p>
          </div>
        </div>
      </div>
    </sweet-modal>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import CategoryCard from '../components/CategoryCard.vue'
import ProductCard from '../components/ProductCard.vue'
export default {
  name: 'Home',
  components: {
    Carousel,
    CategoryCard,
    ProductCard
  },
  data () {
    return {
      register: {
        name: '',
        password: '',
        email: ''
      },
      login: {
        email: '',
        password: ''
      }
    }
  },
  events: {
    registerModalOpen () {
      this.$refs.modal.open()
    },
    loginModalOpen () {
      this.$refs.modal_login.open()
    },
    on_login_success () {
      this.$refs.modal_login.close()
    },
    on_register_success () {
      this.$refs.modal.close()
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    registerUser () {
      const payload = {
        name: this.register.name,
        password: this.register.password,
        email: this.register.email
      }
      this.$store.dispatch('register', payload)
    },
    openRegisterModal () {
      this.$refs.modal.open()
      this.$refs.modal_login.close()
    },
    doLogin () {
      const payload = {
        email: this.login.email,
        password: this.login.password
      }
      this.$store.dispatch('login', payload)
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchCategories')
    this.$store.commit('SET_LOGGED_IN')
    this.$store.dispatch('fetchUserCart')
  }
}
</script>
