<template>
  <div class="home">
    <div class="main-flex">
      <div class="col-2 sidenav uk-card-secondary uk-animation-slide-left">
        <div class="content-nav uk-card-secondary">
          <div class="category-title">
            <h6>CATEGORIES</h6>
          </div>
          <div class="categories-list">
            <Category
              v-for="category in categories"
              :key="category.id"
              :category="category"
            />
          </div>
        </div>
        <div class="cart-button" v-if="logged">
          <span id="cart-button-text">{{ amountItems }} items on cart</span>
          <router-link to="/cart"><button class="cart uk-button"><span uk-icon="icon: cart"></span><span> Cart</span></button></router-link>
        </div>
        <br>
        <div class="wishlist-button" v-if="logged">
          <router-link to="/wishlist"><button class="wishlist uk-button"><span uk-icon="icon: heart"></span><span> Wish</span></button></router-link>
        </div>
        <div class="history-button" v-if="logged">
          <router-link to="/history"><button class="history uk-button"><span uk-icon="icon: history"></span><span> History</span></button></router-link>
        </div>
      </div>
      <Profile />
      <AllProducts v-if="!params && $route.name !== 'Wishlist' && $route.name !== 'Cart' && $route.name !== 'History'" />
      <router-view v-else-if="params || $route.name === 'Wishlist' || $route.name === 'Cart' || $route.name === 'History'"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AllProducts from '../components/AllProducts'
import Profile from '../components/Profile'
import Category from '../components/Category'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    toWishlists () {
      this.$router.push('/wishlist')
    }
  },
  components: {
    Category, AllProducts, Profile
  },
  computed: {
    amountItems () {
      let count = 0
      this.$store.state.cart.forEach(element => {
        count += element.amount
      })
      return count
    },
    categories () {
      return this.$store.state.categories
    },
    logged () {
      return this.$store.state.logged
    },
    params () {
      return this.$route.params.category
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>
#card-button-text {
  color: white !important;
}

.cart-button {
  margin-top: 8rem;
  font-family: 'Alfa Slab One', cursive;
}

.content {
  margin-top: 12px;
  margin-left: 200px;
}

.history {
  padding-left: 17px !important;
  padding-right: 17px;
}

.history-button {
  margin-top: 25px;
  font-family: 'Alfa Slab One', cursive;
}

.uk-button {
  color: black;
}

.uk-button:hover {
  background-color: #ff9966;
  transition: 300ms;
}

.content-nav h6 {
  font-family: 'Alfa Slab One', cursive;
  color: white;
}

.main-flex {
  display: flex;
}

.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 9rem;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}

.wishlist-button {
  font-family: 'Alfa Slab One', cursive;
  padding: 0;
}
</style>
