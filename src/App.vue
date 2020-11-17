<template>
  <div id="app" class="uk-background">
    <div id="nav" class="uk-background-secondary uk-light uk-panel">
      <router-link class="nav-links" to="/">WatdeCom</router-link>
      <router-link class="nav-links" to="/landing">Login</router-link>
    </div>
  <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  font-family: 'Alfa Slab One', cursive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  z-index: 2;
}

#nav a {
  text-decoration: none;
  color: #f8f9fa;
  font-size: 50px;
  margin: 0px 20px;
}

#nav a:hover {
  color: #ff9966;
  transition: 300ms;
}
</style>
