<template>
  <div class="container mt-5">
    <div class="row justify-content-center mt-5">
      <div class="">
        <img src="https://images.unsplash.com/photo-1550481066-1c0f5d6c1f20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="">
      </div>
      <div class="col-3">
        <p @click.prevent="toRegister" type="button" class="register mt-5"><u>Register</u></p>
        <h1 class="title mt-5">DARMA</h1>
        <hr>
        <h5 class="mb-4 login">Login</h5>
        <form @submit.prevent="login">
          <div class="form-group">
            <input v-model="email" type="email" class="form-control form-control-sm" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <input v-model="password" type="password" placeholder="password" class="form-control form-control-sm" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-secondary btn-block btn-sm">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toRegister () {
      this.$router.push('/register')
    },

    login () {
      const { email, password } = this
      this.$store.dispatch('login', { email, password })
        .then(() => {
          this.$router.push('/')
        })
        .catch(({ response }) => {
          console.log(response.data.message)
          this.$router.push('/login')
        })
    }

  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@700&family=Modak&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@700&family=Modak&family=Yanone+Kaffeesatz:wght@200;500;600;700&display=swap');
  h1 {
    font-family: 'Big Shoulders Stencil Text', cursive;
    font-family: 'Modak', cursive;
    color: white;
  }
  .login {
    color: white;
  }
  .register {
    color:#ecf0f1;
    margin-left: 12rem;
    font-family: 'Big Shoulders Stencil Text', cursive;
    font-family: 'Modak', cursive;
    font-family: 'Yanone Kaffeesatz', sans-serif;
  }
  .register:hover {
    color: white;
  }
  img {
    border: 0px solid red;
    box-shadow: 1px 1px 2px grey;
  }
  .col-3 {
    background-color: #c0392b;
    border: 0px solid red;
    box-shadow: 1px 1px 2px grey;
  }
</style>>
