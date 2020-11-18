<template>
  <div class="profile">
    <p>{{ email }}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    email () {
      return localStorage.getItem('email')
    }
  }
}
</script>

<style>
.profile p {
  font-family: 'Alfa Slab One', cursive;
  font-size: 15px;
  margin-left: 2px;
}
</style>
