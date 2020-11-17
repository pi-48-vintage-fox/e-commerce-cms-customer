<template>
  <div>
    <v-container>
      <v-row wrap justify="center">
        <v-col v-for="product in products" :key="product.id" md="12" lg="3">
          <v-card class="my-2" max-width="344">
            <v-img :src="product.image_url" height="200px"></v-img>

            <v-card-title>
              {{ product.name }}
            </v-card-title>

            <v-card-subtitle> Rp.{{ product.price }} </v-card-subtitle>

            <v-card-actions>
              <!-- <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn> -->

              <v-spacer></v-spacer>
              <v-btn color="orange lighten-2" text @click="showing(product.id, product.price)">
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
                    <v-text-field
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
                    ></v-text-field>
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
                    <v-btn color="primary" class="mb-2 ml-2" type="submit">submit</v-btn>
                  </v-form>
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
      price: ""
    };
  },
  methods: {
    showing(id, price) {
      if (this.ProductId !== null) {
        this.ProductId = null;
      }
      console.log(id);
      this.ProductId = id;
      this.show = !this.show;
      this.price = price
    },
    addToCart() {
      let size = this.size[0].toLowerCase() == "x" ? this.size.slice(0,2) : this.size.slice(0,1)
      const data = {
        ProductId: this.ProductId,
        name: this.name,
        address: this.address,
        quantity: +this.quantity,
        size,
        price: this.price,
        totalPrice: this.getTotalPrice,
        stock: this.getStock,
      }
      this.$store.commit('ADD_TO_ORDER', data)
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
    getStock() {
      let sizes = this.size.slice(4);
      return parseInt(sizes);
    },
    getTotalPrice () {
      return this.price * +this.quantity
    },
    ...mapState({
      // ...
      products: "products",
    }),
  },
  created() {
    this.$store.dispatch("fetchProducts");
    // console.log(this.filterSize);
  },
  mounted() {},
};
</script>

<style></style>
