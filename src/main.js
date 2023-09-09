import "./assets/main.css";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 200,
  duration: 600,
  easing: "ease-in-out",
  delay: 200,
  once: true,
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
