import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: "Products",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/Products.vue"),
      },
    ],
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter(from, to, next) {
      if (!localStorage.access_token) return next();
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter(from, to, next) {
      if (!localStorage.access_token) return next();
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
    beforeEnter(from, to, next) {
      if (localStorage.access_token) return next();
    },
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
