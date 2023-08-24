import "./assets/main.css";


import { createPinia } from "pinia";
import { createApp } from "vue";
import { notivue } from "notivue";

import App from "./App.vue";
import router from "./router";

import "notivue/notifications.css";
import "notivue/animations.css";

const app = createApp(App);

app.use(notivue, {
  limit: 1
});
app.use(createPinia());
app.use(router);
app.mount("#app");
