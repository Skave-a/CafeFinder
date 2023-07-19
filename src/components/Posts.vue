<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  computed: mapGetters(["allPosts"]),
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    this.fetchPosts();
  },
};
</script>

<template>
  <div class="post" v-for="post in allPosts" :key="post.id">
    <h2>{{ post.name }}</h2>
    <p>{{ post.address }}</p>
  </div>
</template>

<style>
.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
