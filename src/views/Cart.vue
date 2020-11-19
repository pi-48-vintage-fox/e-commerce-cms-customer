<template>
  <div>
    <!-- <h1>{{ orders }}</h1> -->
    <v-container>
      <h1 class="py-4">Carts</h1>
      <v-data-table class="elevation-1" :items="orders" :headers="headers">
        <template v-slot:item.image="{ item }" width="200">
          <!-- <v-chip dark > -->
          <!-- <img src="" alt=""> -->
          <v-img :src="item.Product.image_url" width="200">
            <!-- {{ item.image }} -->
          </v-img>
          <!-- </v-chip> -->
        </template>
        <template v-slot:item.quantity="{ item }">
          <v-btn color="red" icon @click="subtract(item.id, item.quantity)">
            <v-icon>
              mdi-minus-box-outline
            </v-icon>
          </v-btn>
          {{ item.quantity }}
          <v-btn
            color="success"
            icon
            @click="plus(item.id, item.quantity, item.ProductId, item.size)"
          >
            <v-icon>
              mdi-plus-box-outline
            </v-icon>
          </v-btn>
        </template>
        <template v-slot:item.price="{ item }" width="200">
          <!-- <v-chip dark > -->
          <!-- <img src="" alt=""> -->
          <p>Rp. {{ item.Product.price }}</p>

          <!-- </v-chip> -->
        </template>
        <template v-slot:item.totalPrice="{ item }" width="200">
          <!-- <v-chip dark > -->
          <!-- <img src="" alt=""> -->
          <p>Rp. {{ item.totalPrice }}</p>
          <!-- </v-chip> -->
        </template>
        <template v-slot:item.action="{ item }">
          <v-btn color="red" icon @click="deleteCart(item.id)">
            <v-icon>
              mdi-delete-outline
            </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { succesToast, failedToast } from "../helpers/Swal.js";

export default {
  name: "Cart",
  data() {
    return {
      headers: [
        {
          text: "No",
          align: "start",
          sortable: false,
          value: "no",
        },
        {
          text: "Product",
          // align: "start",
          // sortable: false,
          value: "Product.name",
        },
        { text: "image", value: "image" },
        { text: "Size", value: "size" },
        { text: "quantity", value: "quantity" },
        { text: "Price", value: "price" },
        { text: "Subtotal", value: "totalPrice" },
        { text: "Action", value: "action" },
      ],
    };
  },
  computed: {
    orders() {
      let cart = this.$store.state.carts;
      cart.forEach((e, index) => (e.no = index + 1));
      return cart;
    },
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    subtract(id, quantity) {
      // console.log(quantity, ",,,,");
      if (quantity <= 1) {
        return Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("deleteCart", id);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
      let stock = +quantity - 1;
      let cart = this.orders.find((e) => e.id == id);
      const totalPrice = cart.Product.price * stock;
      const payload = {
        cartId: id,
        quantity: stock,
        totalPrice,
      };
      this.$store.dispatch("editCarts", payload);
      succesToast("Successfully decrease");
    },
    plus(id, quantity, ProductId, sizes) {
      // console.log(this.products, 'ini')
      let checkProduct = this.products.find((e) => e.id == ProductId);
      console.log(checkProduct, "<<<<<");
      if (checkProduct[`${sizes}`] <= quantity) {
        // return console.log("gagal");
        return failedToast('Maximum quantity')
      }
      let stock = +quantity + 1;
      let cart = this.orders.find((e) => e.id == id);
      const totalPrice = cart.Product.price * stock;
      const payload = {
        cartId: id,
        quantity: stock,
        totalPrice,
      };
      // console.log(payload);
      this.$store.dispatch("editCarts", payload);
      succesToast("Successfully increase");
    },
    deleteCart(id) {
      return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch("deleteCart", id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
      // this.$store.dispatch("deleteCart", id);
    },
  },
  created() {
    this.$store.dispatch("fetchCarts");
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style></style>
