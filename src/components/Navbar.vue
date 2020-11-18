<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <h2 class="is-size-3 brand-text">ELOOK</h2>
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            HOME
          </a>

          <a class="navbar-item">
            PRODUCTS
          </a>

          <a class="navbar-item">
            ABOUT US
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <i class="fas fa-shopping-bag mr-1"></i>
            <p class="is-size-6">My Cart</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
