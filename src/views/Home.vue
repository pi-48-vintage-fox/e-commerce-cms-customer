<template>
  <div>
    <v-carousel>
      <!-- <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item> -->
    </v-carousel>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    if (localStorage.access_token) {
      this.$store.commit("STATUS_LOG", true);
    } else {
      this.$store.commit("STATUS_LOG", false);
    }
  },
};
</script>

<style App></style>
