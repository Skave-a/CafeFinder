import { ActionContext } from "vuex";
import { Restaurant, State } from "./types";
import { reactive } from "vue";
import { BASE_URL } from "@/constants";

export default {
  actions: {
    async fetchPost(ctx: ActionContext<State, State>): Promise<void> {
      const numOfpost =
        Math.floor(Math.random() * ctx.rootGetters.postsCount) + 1;
      const res = await fetch(`${BASE_URL}/get-view?id=${numOfpost}`);
      const post = await res.json();
      ctx.commit("updatePost", post.data);
    },
  },
  mutations: {
    updatePost(state: State, post: Restaurant): void {
      state.post = post;
    },
  },
  state: reactive({
    posts: [],
  }),
  getters: {
    post(state: State): Restaurant {
      return state.post;
    },
  },
};
