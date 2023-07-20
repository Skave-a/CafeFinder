import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import VueSocialSharing from "vue-social-sharing";

createApp(App).use(store).use(VueSocialSharing).mount("#app");
