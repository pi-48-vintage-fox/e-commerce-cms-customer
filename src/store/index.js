import Vue from "vue";
import Vuex from "vuex";
import axios from "../config/axios";
import router from "../router/index";
import { succesToast } from "../helpers/Swal.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [
      {
        id: 1,
        productName: "Jacket H&M",
        image:
          "https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2020/04/09/663219154.png",
        ProductId: 2,
        name: "rivari",
        address: "jl raya condet",
        quantity: 2,
        size: "L",
        price: 450000,
        totalPrice: 900000,
        stock: 33,
      },
    ],
    carts: [],
    isLogin: false,
  },
  mutations: {
    FETCH_PRODUCTS(state, payload) {
      state.products = payload;
    },
    ADD_TO_ORDER(state, payload) {
      let id = 1;
      if (state.cart.length > 0) {
        id = state.cart.length + 1;
      }
      // console.log(payload)
      payload.id = id;
      state.cart.push(payload);
    },
    FETCH_CARTS(state, payload) {
      state.carts = payload;
    },
    SUBTRACT_QUANTITY(state, payload) {
      state.cart.forEach((e, i) => {
        if (e.id == payload.cartId) {
          console.log(e, i);
          e.quantity == 0 ? state.cart.slice(i) : e.quantity--;
          e.totalPrice = e.quantity * e.price;
        }
      });
    },
    PLUS_QUANTITY(state, payload) {
      state.cart.map((e) => {
        if (e.id == payload.cartId) {
          e.quantity++;
          e.totalPrice = e.quantity * e.price;
        }
      });
    },
    DELETE_CART(state, payload) {
      let deleted;
      let filter = state.cart.filter((e) => {
        if (e.id == payload) {
          deleted = e;
        }
        return e.id != payload;
      });
      console.log(deleted, "ini delete");
      state.cart = filter;
    },
    STATUS_LOG(state, payload) {
      state.isLogin = payload;
    },
  },
  actions: {
    register(context, payload) {
      axios({
        method: "POST",
        url: "/register",
        data: payload,
      })
        .then((response) => {
          console.log(response.data);
          router.push({ path: '/login' })
          succesToast("Success add a new user!")
        })
        .catch((err) => console.log(err.response));
    },
    login(context, payload) {
      axios({
        method: "POST",
        url: "/loginClient",
        data: payload,
      })
        .then((response) => {
          // console.log(response.data)
          localStorage.setItem("access_token", response.data.access_token);
          router.push({ path: "/" });
          context.commit("STATUS_LOG", true);
          succesToast('Successfully login')
        })
        .catch((err) => console.log(err.response));
    },
    logout(context, payload) {
      localStorage.clear()
      router.push({ path: "/login" });
      context.commit("STATUS_LOG", payload);
    },
    fetchProducts(context) {
      const access_token = localStorage.access_token;
      axios({
        method: "GET",
        url: "/productsClient",
        headers: {
          access_token,
        },
      })
        .then((response) => {
          // console.log(response.data, 'ini fetch product dr store')
          context.commit("FETCH_PRODUCTS", response.data);
        })
        .catch((err) => console.log(err.response));
    },
    fetchCarts(context) {
      const access_token = localStorage.access_token;
      axios({
        method: "GET",
        url: "/ordersClient",
        headers: {
          access_token,
        },
      })
        .then((response) => {
          // console.log(response.data, 'ini fetch product dr store')
          context.commit("FETCH_CARTS", response.data);
        })
        .catch((err) => console.log(err.response));
    },
    addToCart(context, payload) {
      const access_token = localStorage.access_token;
      axios({
        method: "POST",
        url: "/ordersClient",
        headers: {
          access_token,
        },
        data: payload,
      })
        .then((response) => {
          // context.commit("")
          console.log(response.data);
          context.dispatch("fetchCarts");
          succesToast("Successfully added to cart");
        })
        .catch((err) => console.log(err.response));
    },
    editCarts(context, payload) {
      const access_token = localStorage.access_token;
      axios({
        method: "PUT",
        url: `/ordersClient/${payload.cartId}`,
        headers: {
          access_token,
        },
        data: {
          quantity: payload.quantity,
          totalPrice: payload.totalPrice,
        },
      })
        .then((response) => {
          console.log(response.data);
          context.dispatch("fetchCarts");
        })
        .catch((err) => console.log(err.response));
    },
    deleteCart(context, payload) {
      const access_token = localStorage.access_token;
      axios({
        method: "DELETE",
        url: `/ordersClient/${+payload}`,
        headers: {
          access_token,
        },
      })
        .then((response) => {
          console.log(response.data);
          context.dispatch("fetchCarts");
        })
        .catch((err) => console.log(err.response));
    },
  },
  modules: {},
});
