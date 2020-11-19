<template>
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
      <li class="dropdown1">
        <a href="#">Register</a>
        <ul class="dropdown2">
          <form @submit.prevent="registerUser">
            <li><input type="text" placeholder="FullName" v-model="registerName" /></li>
            <li><input type="text" placeholder="email@mail.com" v-model="registerEmail"/></li>
            <li><input type="password" placeholder="Password" v-model="registerPassword" /></li>
            <li><button class="btn btn-primary" type="submit"> Register Now</button></li>
            <span><p>{{errorMessage}}</p></span>
          </form>
        </ul>
      </li>
      <li class="dropdown1">
        <a href="#">Login</a>
        <ul class="dropdown2">
          <form @submit.prevent="login">
            <li><input type="text" placeholder="email@mail.com" v-model="loginEmail"/></li>
            <li><input type="password" placeholder="password" v-model="loginPassword" /></li>
            <li><button class="btn btn-primary" type="submit"> Login</button></li>
            <span><p>{{errorMessage}}</p></span>
          </form>
        </ul>
      </li>
      <!-- goto cart -->
      <a class="shop" href="#"><img src="images/cart.png" alt="" /></a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LoginNav',
  data () {
    return {
      registerName: '',
      registerEmail: '',
      registerPassword: '',
      errorMessage: '',
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    registerUser () {
      const params = {
        name: this.registerName,
        email: this.registerEmail,
        password: this.registerPassword
      }
      this.$store.dispatch('registerUser', params)
        .then(data => {
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
          this.errorMessage = err
        })
    },
    login () {
      const params = {
        email: this.loginEmail,
        password: this.loginPassword
      }

      this.$store.dispatch('login', params)
        .then(data => {
          this.$router.push('/')
        })
        .catch(err => {
          this.errorMessage = err
        })
    }
  }
}
</script>

<style>
</style>
