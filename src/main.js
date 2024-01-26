import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

const app = createApp(App);

// Используйте роутер как плагин
app.use(router);

app.use(store);

app.mount("#app");
