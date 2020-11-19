<template>
    <div class="fixed-top mb-5">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mr-5" id="navbarTogglerDemo01">
        <a class="title ml-5 mr-5" href="#">DARMA</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a @click.prevent="homePage" class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" type="button" @click.prevent="cartPage" href="">Cart</a>
          </li>
        </ul>
        <div class="mr-2">
          <i @click.prevent="logout" class="logout material-icons my-2 my-sm-0" type="submit">power_settings_new</i>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import swal from 'sweetalert2'
export default {
  name: 'Navbar',
  methods: {
    logout () {
      swal.fire({
        title: 'Wait!',
        text: 'Are you sure want to logout',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#45aaf2',
        cancelButtonColor: '#e84118',
        confirmButtonText: 'Yes, i want'
      })
        .then((result) => {
          if (result.isConfirmed) {
            localStorage.clear()
            this.$router.push('/login')
          }
        })
    },
    cartPage () {
      this.$router.push('/carts')
    },
    homePage () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@700&family=Modak&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text:wght@700&family=Modak&family=Yanone+Kaffeesatz:wght@200;500;600;700&display=swap');
  .title {
    font-family: 'Big Shoulders Stencil Text', cursive;
    font-family: 'Modak', cursive;
    color: white;
    font-size: 1.5rem;
  }
  .logout {
    color: #a4b0be;
    background-origin: red;
    border: 0px;
  }
  .logout:hover{
    color: #CAD3C8;
  }
</style>
