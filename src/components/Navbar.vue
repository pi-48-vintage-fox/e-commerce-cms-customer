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
            <v-btn icon>
              <router-link to="/login">
                <v-icon>mdi-login</v-icon>
              </router-link>
            </v-btn>

            <v-btn icon>
              <router-link to="/register">
                <v-icon>mdi-account-plus</v-icon>
              </router-link>
            </v-btn>

            <v-btn icon @click="logout">
              <v-icon>mdi-logout-variant</v-icon>
            </v-btn>

            <v-btn icon>
              <router-link to="/cart">
                <v-icon>mdi-dots-vertical</v-icon>
              </router-link>
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style></style>
