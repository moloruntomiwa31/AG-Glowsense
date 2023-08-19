import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/about",
            name: "about",
            component: () => import('../views/About.vue')
        },
        {
            path: "/products",
            name: "products",
            component: () => import('../views/Product.vue')
        },
        {
            path: "/products/:id",
            name: "productview",
            component: () => import('../views/ProductView.vue')
        },
        {
            path: "/contacts",
            name: "contacts",
            component: () => import('../views/Contact.vue')
        },
        {
            path: "/cart",
            name: "cart",
            component: () => import('../views/Cart.vue')
        },
        {
            path: "/:catchAll(.*)",
            name: "notfound",
            component: () => import('../views/NotFound.vue')
        },       
    ]
})

export default router