import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      alias: "/home",
      component: Home,
      meta: {
        title: "AG-GLOWSENSE | HOME",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
      meta: {
        title: "AG-GLOWSENSE | ABOUT",
      },
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/Product.vue"),
      meta: {
        title: "AG-GLOWSENSE | PRODUCTS",
      },
    },
    {
      path: "/products/:id",
      name: "productview",
      component: () => import("../views/ProductView.vue"),
      meta: {
        title: "AG-GLOWSENSE | PRODUCTS",
      },
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/Contact.vue"),
      meta: {
        title: "AG-GLOWSENSE | CONTACT",
      },
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/Cart.vue"),
      meta: {
        title: "AG-GLOWSENSE | CART",
      },
    },
    {
      path: "/:catchAll(.*)",
      name: "notfound",
      component: () => import("../views/NotFound.vue"),
      meta: {
        title: "AG-GLOWSENSE | 404",
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUp.vue"),
      meta: {
        title: "AG-GLOWSENSE | SIGNUP",
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LogIn.vue"),
      meta: {
        title: "AG-GLOWSENSE | LOGIN",
      },
    },
    {
      path: "/blogs",
      name: "blog",
      component: () => import("../views/Blog.vue"),
      meta: {
        title: "AG-GLOWSENSE | BLOGS",
      },
    },
    {
      path: "/blogs/:id",
      name: "blogView",
      component: () => import("../views/BlogView.vue"),
      meta: {
        title: "AG-GLOWSENSE | BLOGS",
      },
    },
  ],
});

router.beforeEach((to) => {
  document.title = to.meta?.title ?? "AG-GLOWSENSE";
});

export default router;
