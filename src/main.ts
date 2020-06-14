import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "@picocss/pico/css/pico.classless.min.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
