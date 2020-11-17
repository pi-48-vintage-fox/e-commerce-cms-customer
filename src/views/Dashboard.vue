<template>
  <div class="home">
    <div class="main-flex">
      <div class="col-2 sidenav uk-card-secondary uk-animation-slide-left">
        <div class="content-nav uk-card-secondary">
          <p>Hello</p>
        </div>
      </div>
      <div class="col-10">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.main-flex {
  display: flex;
}

.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 9rem;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
}
</style>
