<template>
  <div>
    <Navbar />
    <div class="top">
      <p><span>Shopi</span></p>
      <div class="jumbotron jumbotron-fluid bg-transparent pt-1">
        <div class="container mt-0">
          <ListProduct />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar"
import ListProduct from "../components/ListProductPublic"
export default {
  name: "product",
  comments: {
    Navbar,
    ListProduct,
  },
  created() {
    this.$store.dispatch("fetchProduct")
  },
}
</script>
