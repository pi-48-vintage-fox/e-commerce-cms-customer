<template>
    <section id="login-page">
        <div class="bg-video">
            <video src="../assets/Fish on Market.mp4" class="bg-video-content" autoplay muted loop>
            </video>
        </div>
        <div class="center">
            <img class="img-logo" src="../assets/frish logo non.png" alt="frish logo">
            <h1 class="welcome">Login</h1>
            <form @submit.prevent="login">
                <div class="form-group">
                    <input v-model="email_login" id="email" class="form-control" type="email" placeholder="Type your email..">
                </div>
                <div class="form-group">
                    <input v-model="password_login" id="password" class="form-control" type="password" placeholder="Type your password..">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <div class="register-btn">
          <p>Didn't have an account?</p>
          <button v-on:click.prevent="showRegisterForm()" class="btn btn-light">Register</button>
          <p style="margin-top: 10px; font-size: 10px; color: black">Created By : Adrian Muhammad Kuncoro</p>
        </div>
        <div v-show="!changer" class="register-box">
          <h3 style="margin-bottom: 20px;">Register Form</h3>
          <form @submit.prevent="register">
            <div class="form-group">
              <input v-model="email_register" id="email-regis" class="form-control" type="email" placeholder="Type your email..">
            </div>
            <div class="form-group">
              <input v-model="password_register" id="password-regis" class="form-control" type="password" placeholder="Type your password..">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      changer: true,
      email_login: '',
      password_login: '',
      email_register: '',
      password_register: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email_login,
        password: this.password_login
      }
      this.$store.dispatch('login', payload)
    },
    showRegisterForm () {
      if (this.changer === true) {
        this.changer = false
      } else if (this.changer === false) {
        this.changer = true
      }
    },
    register () {
      const payload = {
        email: this.email_register,
        password: this.password_register
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style>
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: blue;
  opacity: .5;
}
.bg-video-content {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
#login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.center {
  /* background-color: rgba(245, 246, 250,.8); */
  /* width: 300px; */
  /* height: 300px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.img-logo {
  width: 40vh;
}
.welcome {
  color: white;
  text-shadow: 2px 5px 10px black;
  margin-bottom: 20px;
}
.register-btn {
  position: fixed;
  bottom: 5px;
  left: 30px;
}
.register-box {
  position: fixed;
  bottom: 150px;
  left: -10px;
  background-color: white;
  width: 50vh;
  height: 45vh;
  border-radius: 15px;
  -webkit-box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.17);
  -moz-box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.17);
  box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.17);
  padding: 45px;
}
</style>
