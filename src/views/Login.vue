<template>
  <div>
    <NavBar />
    <div class="ketengah">
      <h1>Login Form</h1>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import LoginForm from '@/components/LoginForm.vue'
export default {
  name: 'Login',
  components: {
    NavBar,
    LoginForm
  }
}
</script>

<style>
.ketengah {
  margin-top: 150px;
}
</style>
