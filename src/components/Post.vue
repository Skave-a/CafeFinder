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
    <div class="post__block">
      <template v-if="post && post.name">
        <strong>{{ post.name }}</strong>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #4f46e5;
  border-radius: 0.6em;
  color: #4f46e5;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;

  &:hover {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #4f46e5 inset;
  }

  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:active {
    transform: translateY(2px);
  }
}

.getLuck {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
}

.post__block {
  width: 250px;
}
</style>
