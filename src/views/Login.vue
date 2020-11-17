<template>
  <div id="landing">
    <div class="container justify-content-center" id="landing-page">
      <div id="login-box" class="justify-content-center">
          <div class="container justify-content-center mt-3 col-6">
              <form @submit.prevent="login">
                  <h3 class="text-dark text-center font-weight-bolder">Plantopedia Login</h3><br><br>
                  <div class="form-group">
                      <label for="email_login" class="text-dark">Email</label>
                      <input type="email" class="form-control" id="email_login" aria-describedby="emailHelp" autocomplete="email" v-model="email">
                  </div>
                  <div class="form-group">
                      <label for="password_login" class="text-dark">Password</label>
                      <input type="password" class="form-control" id="password_login" autocomplete="current-password" v-model="password">
                  </div>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  <br><button type="submit" class="btn btn-dark" style="width: 100%">Login</button>
              </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
