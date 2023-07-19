<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  computed: mapGetters(["post", "postsCount"]),
  methods: {
    ...mapActions(["fetchPost"]),
    async handleClick() {
      await this.fetchPost();
    },
  },
};
</script>

<template>
  <div>
    <button @click="handleClick" class="btn">Мне повезет!</button>
    <template v-if="post && post.name">
      <strong>{{ post.name }}</strong>
    </template>
  </div>
</template>

<style scoped>
.btn {
  padding: 10px;
}
</style>
