import { ActionContext, GetterTree } from "vuex";
import { Restaurant, State } from "./types";
import { reactive } from "vue";
import { BASE_URL } from "@/constants";

export default {
  actions: {
    async fetchPosts(ctx: ActionContext<State, State>): Promise<void> {
      const res = await fetch(`${BASE_URL}/get-index`);
      const posts = await res.json();
      ctx.commit("updatePosts", posts.data);
    },
  },
  mutations: {
    updatePosts(state: State, posts: Restaurant[]): void {
      state.posts = posts;
    },
  },
  state: reactive({
    posts: [],
  }),
  getters: {
    allPosts(state: State): Restaurant[] {
      return state.posts;
    },
    postsCount(state: State, getters: GetterTree<State, State>): number {
      return getters.allPosts.length;
    },
  },
};
