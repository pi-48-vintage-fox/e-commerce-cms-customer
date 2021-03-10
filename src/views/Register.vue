<template>
  <div>
    <NavBar />
    <div class="ketengah">
      <h1>Register From</h1>

      <RegisterForm />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import RegisterForm from '@/components/RegisterForm.vue'
export default {
  name: 'Register',
  components: {
    NavBar,
    RegisterForm
  }
}
</script>

<style>
.ketengah {
  margin-top: 150px;
}
</style>
