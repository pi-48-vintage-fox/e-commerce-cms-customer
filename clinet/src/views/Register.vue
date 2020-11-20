<template>
  <section class="container" id="login">
    <div class="row justify-content-center mt-5">
      <div class="col-4 fas">
        <h1 class="text-white">Register</h1>
        <form @submit.prevent="register" class="text-white">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              v-model="name"
              type="text"
              id="name"
              class="form-control"
              placeholder="input your name"
              autocomplete="name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="email"
              type="text"
              id="email"
              class="form-control"
              placeholder="input your email"
              autocomplete="email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="form-control"
              placeholder="input your password"
              autocomplete="current-password"
            />
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
          <router-linkt to="/login">
            <button type="button" class="btn btn-success">Register</button>
          </router-linkt>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    register() {
      console.log("masuk data login index");
      const payload = {
        name: this.name,
        email: this.email,
        password: this.email,
      };
      console.log(payload);
      this.$store
        .dispatch("register", payload)
        .then((data) => {
          this.name = "";
          this.email = "";
          this.password = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
