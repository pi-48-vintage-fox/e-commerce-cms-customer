<template>
  <nav class="navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand font-weight-bold" href="#">Plantopedia</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item active">
        <a class="nav-link" href="#">Login<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Register</a>
        </li>
        <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Cart</a>
        </li>
    </ul>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
