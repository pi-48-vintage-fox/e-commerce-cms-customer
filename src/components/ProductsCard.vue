<template>
  <div id="products">
    <img :src="product.image_url" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <table class="table table-bordered table-dark text-primary display-5">
        <tbody>
          <tr>
            <td>Price</td>
            <td>Rp. {{ product.price.toLocaleString("id") }}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>{{ product.stock }}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>{{ product.category }}</td>
          </tr>
        </tbody>
      </table>
      <div class="icon mx-3">
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-cart-plus-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          type="button"
          v-show="addForm === false"
          @click="addCart"
        >
          <path
            fill-rule="evenodd"
            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"
          />
        </svg>
      </div>
      <AddCart v-show="addForm === true" :product="product"></AddCart>
    </div>
  </div>
</template>

<script>
import AddCart from "./AddCart";
export default {
  name: "ProductCard",
  props: ["product"],
  components: {
    AddCart,
  },
  data() {
    return {
      addForm: false,
    };
  },
  methods: {
    addCart() {
      this.addForm = true;
    },
  },
  computed: {
    addFrom() {
      return this.$store.state.addForm;
    },
  },
};
</script>

<style>
.flex-rows {
  display: flex;
  justify-content: space-between;
}
</style>