<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <a class="navbar-brand" href="#" @click.prevent="">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <a class="nav-link" href="#" @click.prevent="" >Show My Cart!<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item dropdown">
                  <div class="dropdown">
                      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Category
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#" @click.prevent="">Game</a>
                          <a class="dropdown-item" href="#" @click.prevent="">DLC</a>
                          <a class="dropdown-item" href="#" @click.prevent="">Workshop</a>
                      </div>
                  </div>
              </li>
          </ul>
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" @click.prevent='logoutsubmit' href="#">Register</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" @click.prevent='logoutsubmit' href="#">Login</a>
              </li>
          </ul>
      </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.dropdown-toggle,
.dropdown-menu {
    border-radius: 0px !important;
}
.dropdown-item:hover {
    color: white;
    background-color: transparent;
}
.btn-danger {
    width: 55%;
}
.dropdown:hover>.dropdown-menu {
  display: block;
}
</style>
