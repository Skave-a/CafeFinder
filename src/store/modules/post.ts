import { ActionContext } from "vuex";
import { Restaurant, State } from "./types";

export default {
  actions: {
    async fetchPosts(ctx: ActionContext<State, State>): Promise<void> {
      const res = await fetch(
        "https://bandaumnikov.ru/api/test/site/get-index"
      );
      const posts = await res.json();
      ctx.commit("updatePosts", posts.data);
    },
  },
  mutations: {
    updatePosts(state: State, posts: Restaurant[]): void {
      state.posts = posts;
    },
  },
  state: {
    posts: [],
  },
  getters: {
    allPosts(state: State): Restaurant[] {
      return state.posts;
    },
  },
};
