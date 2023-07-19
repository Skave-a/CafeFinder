import { ActionContext } from "vuex";
import { Restaurant, State } from "./types";

export default {
  actions: {
    async fetchPost(ctx: ActionContext<State, State>): Promise<void> {
      const numOfpost =
        Math.floor(Math.random() * ctx.rootGetters.postsCount) + 1;
      const res = await fetch(
        `https://bandaumnikov.ru/api/test/site/get-view?id=${numOfpost}`
      );
      const post = await res.json();
      ctx.commit("updatePost", post.data);
    },
  },
  mutations: {
    updatePost(state: State, post: Restaurant): void {
      state.post = post;
    },
  },
  state: {
    posts: [],
  },
  getters: {
    post(state: State): Restaurant {
      return state.post;
    },
  },
};
