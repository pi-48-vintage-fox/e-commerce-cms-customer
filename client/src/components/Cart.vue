<template>
  <div class="container mt-5">
    <h1>Cart List</h1>

    <div class="row d-flex justify-content-center">
      <div
        class="card mb-3"
        style="max-width: 540px"
        v-for="product in getCart.Products"
        :key="product.id"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <img :src="product.image_url" class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p>Qty : {{ product.Cart.quantity }}</p>
              <p>Price : {{ product.price }}</p>
              <a href="#" @click.prevent="deleteCart(product.id)">Delete</a>
              ||
              <a href="#" @click.prevent="updateCart(product.id)">Update</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      qty: "",
    };
  },
  computed: {
    getCart() {
      return this.$store.state.cart;
    },
    price() {},
  },
  methods: {
    fetchCart() {
      this.$store.dispatch("fetchCart");
    },
    updateCart(id) {
      console.log(id, 'update');
      this.$store.dispatch("fetchUpdate", id)
      this.$router.push('/formupdate')
    },
    deleteCart(id) {
      this.$store
        .dispatch("deleteCart", id)
        .then(({ data }) => {
          this.fetchCart();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  created() {
    this.fetchCart();
  },
};
</script>

<style>
.hiden {
  display: none;
}
</style>
