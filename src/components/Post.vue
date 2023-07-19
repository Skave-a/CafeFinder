<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ShowRestaurant",
  setup() {
    const store = useStore();
    const post = computed(() => store.getters.post);
    const postsCount = computed(() => store.getters.postsCount);

    const fetchPost = async () => {
      await store.dispatch("fetchPost");
    };

    const handleClick = async () => {
      await fetchPost();
    };

    return {
      post,
      postsCount,
      handleClick,
    };
  },
});
</script>

<template>
  <div class="getLuck">
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

.getLuck {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
