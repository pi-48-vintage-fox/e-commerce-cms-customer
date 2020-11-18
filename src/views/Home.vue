<template>
  <div class="home">
    <!-- cart========================================================== -->
    <div v-on:click.prevent="showCart()" id="btn-cart">
      <a><i class="fas fa-cart-plus fa-3x"></i></a>
    </div>
    <div v-show="!changer" id="cart-box">
      <h2 style="font-family: 'chewy'">Cart</h2>
      <div id="cart-body">
        <Cart v-for="cart in carts"
          :key="cart.id"
          :cart="cart">
        </Cart>
      </div>
      <div style="text-align: right; margin-right: 20px">
        <h5>Total</h5>
        <h5>IDR 10.000.000,-</h5>
      </div>
      <button class="btn btn-primary" style="margin-top: -80px">Buy</button>
    </div>
    <!-- end cart========================================================== -->

    <!-- slider image====================================================== -->
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
      style="margin-bottom: -110px"
    >
      <div class="carousel-inner" style="height: 100vh">
        <div class="carousel-item active">
          <img
            src="../assets/hiroko-yoshii-9y7y26C-l4Y-unsplash.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item" style="height: 40vh">
          <img
            src="../assets/sebastian-pena-lambarri-YV593oyMKmo-unsplash.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item" style="height: 40vh">
          <img
            src="../assets/wexor-tmg-L-2p8fapOA8-unsplash.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- end slider image====================================================== -->

    <!-- navbar====================================================== -->
    <nav
      id="navbar-top"
      class="navbar navbar-expand-lg navbar-light">
      <img
        src="../assets/frish logo non.png"
        alt="logo"
        style="width: 10%; margin: 15px"
      />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" style="color: cornsilk"
              ><b>Home</b><span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style="color: cornsilk"
              ><b>Whistlist</b></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style="color: cornsilk"
              ><b>Transactions</b></a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href="#"
              style="color: cornsilk"
              ><b>Category</b></a
            >
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Frozen</a>
              <a class="dropdown-item" href="#">Fillet</a>
            </div>
          </li>
        </ul>
        <span class="navbar-text">
          <a v-show="!loginChanger" v-on:click.prevent="showLoginForm()" class="nav-link" href="#" style="color: cornsilk"><b>Login</b></a>
          <a v-show="loginChanger" v-on:click.prevent="logout()" class="nav-link" href="#" style="color: cornsilk"><b>Logout</b></a>
        </span>
      </div>
    </nav>
    <!-- end navbar====================================================== -->

    <!-- home====================================================== -->
    <div class="container" style="background-color: #0278ae; padding: 30px">
      <div>
        <p style="text-align: right; font-size: 10px; color: #51adcf">
          © Adrian Muhammad Kuncoro
        </p>
      </div>
      <div class="category" style="margin: 10px; text-align: center">
        <h1 style="font-family: 'chewy'; color: cornsilk">ON SALE!!</h1>
      </div>
      <!-- product card====================================================== -->
      <div class="wrapper">
        <Product v-for="product in products"
            :key="product.id"
            :product="product">
          </Product>
      </div>
      <!-- end product card====================================================== -->
    </div>
    <!-- end home====================================================== -->

    <!-- micellaneous===================================================== -->
    <div
      class="jumbotron jumbotron-fluid"
      style="margin-top: 20px; background-color: #51adcf"
    >
      <div class="container">
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>
    <!-- micellaneous===================================================== -->

    <!-- footer======================================================== -->
    <nav id="footer" class="navbar navbar-expand-lg navbar-light">
      <div style="width: 18rem">
        <div class="card-body" style="color: white">
          <img
            src="../assets/frish logo non.png"
            alt="logo"
            width="200vh"
            style="margin-top: 0px; margin-bottom: 20px"
          />
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio
            impedit dolore rerum dolores, illo sapiente commodi.
          </p>
        </div>
      </div>
      <div style="width: 18rem">
        <div class="card-body" style="color: white">
          <h5 class="card-title">About Us</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio
            impedit dolore rerum dolores, illo sapiente commodi aliquam velit
            suscipit nostrum voluptatibus similique quam repellendus excepturi
            animi. Officia, qui atque!
          </p>
        </div>
      </div>
      <div style="width: 18rem">
        <div class="card-body" style="color: white">
          <h5 class="card-title">Our Contact</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio
            impedit dolore rerum dolores, illo sapiente commodi aliquam velit
            suscipit nostrum voluptatibus similique quam repellendus excepturi
            animi. Officia, qui atque!
          </p>
        </div>
      </div>
    </nav>
    <!-- footer======================================================== -->
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
import Cart from '@/components/Cart.vue'
export default {
  name: 'Home',
  data () {
    return {
      changer: true,
      loginChanger: localStorage.access_token
    }
  },
  methods: {
    showCart () {
      if (this.changer === true) {
        this.changer = false
      } else if (this.changer === false) {
        this.changer = true
      }
    },
    showLoginForm () {
      this.$router.push({ path: '/login' })
    },
    logout () {
      localStorage.clear()
      this.loginChanger = localStorage.access_token
    }
  },
  components: {
    Product,
    Cart
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchCarts')
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
/* body {
        font-family: 'Chewy', cursive;
    } */
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#navbar-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
}
#carouselExampleControls {
  position: -webkit-sticky;
  position: sticky;
  top: -560px;
  z-index: 9;
}
#btn-cart {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10;
}
#btn-cart:hover {
  color: gray;
}
#cart-box {
  width: 50vh;
  height: 70vh;
  /* border: 2px solid #0278ae; */
  background-color: white;
  border-radius: 20px;
  position: fixed;
  bottom: 60px;
  right: 60px;
  z-index: 9;
  -webkit-box-shadow: 10px 10px 5px -4px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 10px 10px 5px -4px rgba(0, 0, 0, 0.17);
  box-shadow: 10px 10px 5px -4px rgba(0, 0, 0, 0.17);
  padding: 20px;
}
#cart-body {
  height: 300px;
  width: 300px;
  overflow: auto;
}
.btn-heart {
  margin-left: 50px;
  color: #0278ae;
}
.btn-heart:hover {
  color: palevioletred;
}
.btn-heart:active {
  color: red;
}
#footer {
  background-color: #0278ae;
  padding: 50px;
}
#navbar-top {
  background: rgb(2,120,174);
  background: linear-gradient(0deg, rgba(2,120,174,1) 0%, rgba(2,120,174,0.7343312324929971) 59%, rgba(0,212,255,0) 100%);
}
</style>
