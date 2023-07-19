import { createStore } from "vuex";
import post from "./modules/post";
import postById from "./modules/postById";

export default createStore({
  modules: { post, postById },
});
