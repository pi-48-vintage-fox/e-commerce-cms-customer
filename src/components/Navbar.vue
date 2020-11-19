<template>
  <div>
    <v-app-bar app flat>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-container>
        <!-- <v-toolbar-title>Title</v-toolbar-title> -->
        <div class="d-flex justify-space-between">
          <div>
            <v-btn icon>
              <router-link to="/">
                <v-icon>Logo</v-icon>
              </router-link>
            </v-btn>
          </div>
          <div>
            <v-btn icon v-show="!isLogin">
              <router-link to="/login">
                <v-icon>mdi-login</v-icon>
              </router-link>
            </v-btn>

            <v-btn icon v-show="!isLogin">
              <router-link to="/register">
                <v-icon>mdi-account-plus</v-icon>
              </router-link>
            </v-btn>

            <v-btn icon @click="logout" v-show="isLogin">
              <v-icon>mdi-logout-variant</v-icon>
            </v-btn>

            <v-btn icon v-show="isLogin">
              <router-link to="/cart">
                <v-icon>mdi-cart-outline</v-icon>
              </router-link>
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "Navbar",
  methods: {
    logout() {
      Swal.fire({
        title: "Are you sure want to logout?",
        text: "",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,sure!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch("logout", false);
          this.$router.push({ path: "/login" })
          Swal.fire("Successfully logout!", "Your account has been logout.", "success");
        }
      });
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>

<style></style>
