<template>
  <div>
    <v-container>
      <v-row wrap justify="center">
        <v-col
          v-for="product in products"
          :key="product.id"
          md="3"
          lg="3"
          xl="3"
          class=""
        >
          <v-card class="my-2 mx-auto" max-width="344">
            <v-img :src="product.image_url" height="200px"></v-img>

            <v-card-title>
              {{ product.name }}
            </v-card-title>

            <v-card-subtitle> Rp.{{ product.price }} </v-card-subtitle>
            <div v-for="stock in stocks" :key="stock.id">
              <v-chip v-if="stock.id == product.id" class="mx-3"
                >Stocks: {{ stock.quantity }}</v-chip
              >
            </div>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="orange lighten-2"
                text
                @click="
                  showing(
                    product.id,
                    product.price,
                    product.image_url,
                    product.name
                  )
                "
              >
                Order
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <div v-if="show && ProductId == product.id">
              <v-expand-transition>
                <div>
                  <v-divider></v-divider>

                  <v-card-text>
                    Please order here!
                  </v-card-text>
                  <v-form @submit.prevent="addToCart">
                    <!-- <v-text-field
                      name="name"
                      label="name"
                      class="px-3"
                      v-model="name"
                    ></v-text-field>
                    <v-text-field
                      name="address"
                      label="address"
                      class="px-3"
                      v-model="address"
                      clearable
                    ></v-text-field> -->
                    <div v-for="prodSize in filterSize" :key="prodSize.id">
                      <v-select
                        label="Size"
                        solo
                        class="px-2 mt-2"
                        v-if="prodSize.id == product.id"
                        :items="prodSize.size"
                        v-model="size"
                      ></v-select>
                    </div>
                    <v-text-field
                      name="quantity"
                      label="quantity"
                      class="px-3 mt-n2"
                      type="number"
                      v-model="quantity"
                    ></v-text-field>
                    <v-btn color="primary" class="mb-2 ml-2" type="submit"
                      >Add to cart</v-btn
                    >
                  </v-form>
                  <p class="px-2 py-2 red--text">{{ errorMsg }}</p>
                </div>
              </v-expand-transition>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination v-model="page" :length="6"></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Products",
  data() {
    return {
      page: 1,
      show: false,
      ProductId: null,
      name: "",
      address: "",
      quantity: "",
      size: "",
      price: "",
      image: "",
      productName: "",
      errorMsg: "",
    };
  },
  methods: {
    showing(id, price, image, productName) {
      if (this.ProductId !== null) {
        this.ProductId = null;
      }
      console.log(id);
      this.ProductId = id;
      this.show = !this.show;
      this.price = price;
      this.image = image;
      this.productName = productName;
    },
    addToCart() {
      this.errorMsg = ''
      let size =
        this.size[0].toLowerCase() == "x"
          ? this.size.slice(0, 2)
          : this.size.slice(0, 1);
      if (+this.quantity <= 0) {
        return (this.errorMsg = `Cannot input minus or zero`);
      }
      const data = {
        ProductId: this.ProductId,
        image_url: this.image,
        address: this.address,
        quantity: +this.quantity,
        size,
        totalPrice: this.getTotalPrice,
        stock: this.getStock,
      };
      this.quantity = ""
      this.size = ""
      let prodInCart = this.carts
        .filter((e) => e.ProductId == this.ProductId)
        .find((elem) => elem.size == size);
      let product = this.products.find((e) => e.id == data.ProductId);
      // const size = prodInCart.size;
      console.log(prodInCart, "<<<<<");
      if (!prodInCart || prodInCart == undefined) {
        return product[`${size}`] >= data.quantity
          ? this.$store.dispatch("addToCart", data)
          : (this.errorMsg = `Your order exceeds stock`);
      }
      // let sizeProd = prodInCart.Product[`${size}`]
      // console.log(sizeProd, 'size prods')
      // console.log(prodInCart.Product[`${size}`], "prod size")
      // console.log(size, ' ini size')
      // console.log(prodInCart.size, 'ini iniinini')
      if (prodInCart.size !== size) {
        // console.log("ini dia");
        // return this.$store.dispatch("addToCart", data);
        return product[`${size}`] >= data.quantity
          ? this.$store.dispatch("addToCart", data)
          : (this.errorMsg = `Your order exceeds stock`);
      }

      let check =
        prodInCart.quantity + data.quantity > prodInCart.Product[`${size}`]
          ? false
          : true;
      check
        ? this.$store.dispatch("addToCart", data)
        : (this.errorMsg = `Your order exceeds stock, you have ${prodInCart.quantity} in cart for this item`);

      // if (checkProduct[`${sizes}`] <= quantity) {
      //   return console.log("gagal");
      // }
    },
  },
  computed: {
    filterSize() {
      let filters = this.products.map((element) => {
        let data = {
          id: element.id,
          size: [
            `S ( ${element.S} available)`,
            `M ( ${element.M} available)`,
            `L ( ${element.L} available)`,
            `XL (${element.XL} available)`,
          ],
        };
        return data;
      });
      return filters;
    },
    stocks() {
      let quantity = this.products.map((e) => {
        let data = {
          id: e.id,
          quantity: e.S + e.M + e.L,
        };
        return data;
      });
      return quantity;
    },
    getStock() {
      let sizes = this.size.slice(4);
      return parseInt(sizes);
    },
    getTotalPrice() {
      return this.price * +this.quantity;
    },
    carts() {
      return this.$store.state.carts;
    },
    ...mapState({
      // ...
      products: "products",
    }),
  },
  created() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchCarts");
  },
  mounted() {},
};
</script>

<style></style>
