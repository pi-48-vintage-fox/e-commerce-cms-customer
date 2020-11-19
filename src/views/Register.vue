<template>
  <div class="container mt-5">
    <div class="row justify-content-center mt-5">
      <div class="">
        <img src="https://images.unsplash.com/photo-1603963679475-aea4713b6d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="">
      </div>
      <div class="col-3">
        <h1 class="title mt-4">DARMA</h1>
        <hr>
        <h5 class="mb-4 register">Register</h5>
        <form @submit.prevent="register">
          <div class="form-group">
            <label class="titleInput" for="">Email</label>
            <input v-model="email" type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group mb-4">
            <label class="titleInput" for="">Password</label>
            <input v-model="password" type="password" class="form-control form-control-sm" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-sm">Submit</button>
        </form>
        <small>Already have an account ? <a @click.prevent="login" href="#">login</a></small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      role: 'customer'
    }
  },
  methods: {
    register () {
      const { email, password, role } = this
      this.$store.dispatch('register', { email, password, role })
        .then(() => {
          this.$router.push('/login')
        })
        .catch(({ response }) => {
          console.log(response.data.message)
          this.$router.push('/register')
        })
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@700&family=Modak&family=Yanone+Kaffeesatz:wght@200;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@700&family=Crimson+Text:wght@400;600&family=Modak&family=Yanone+Kaffeesatz:wght@200;500;600;700&display=swap');
  .titleInput {
    margin-right: 40rem;
  }
  .register {
    font-family: 'Big Shoulders Stencil Text', cursive;
    font-family: 'Crimson Text', serif;
    font-family: 'Modak', cursive;
    font-family: 'Yanone Kaffeesatz', sans-serif;
  }
  h1 {
    font-family: 'Big Shoulders Stencil Text', cursive;
    font-family: 'Modak', cursive;
    color: #34495e;
  }
  img {
    border: 0px solid red;
    box-shadow: 1px 2px 2px grey;
    width: 38rem;
  }
  .col-3 {
    border: 0px solid red;
    box-shadow: 1px 2px 2px grey;
  }
</style>
