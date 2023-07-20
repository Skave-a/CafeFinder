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

    const handleName = async () => {
      const postId = post.value.id;
      const postElement = document.getElementById(`post-${postId}`);
      postElement.scrollIntoView({ behavior: "smooth" });
      postElement.classList.add("highlight");
      setTimeout(() => {
        postElement.classList.remove("highlight");
      }, 3000);
    };

    return {
      post,
      postsCount,
      handleClick,
      handleName,
    };
  },
});
</script>

<template>
  <div class="getLuck">
    <button @click="handleClick" class="btn">Мне повезет!</button>
    <div class="post__block">
      <template v-if="post && post.name">
        <strong
          :class="{
            post__title: post.name.length <= 15,
            'post__title--long': post.name.length > 15,
          }"
          @click="handleName"
        >
          {{ post.name }}
        </strong>
      </template>
      <template v-else>
        <strong class="post__title post__luck">...Удачи</strong>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.btn {
  width: 250px;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid $main-color;
  border-radius: 0.6em;
  color: $main-color;
  cursor: pointer;
  display: flex;
  align-self: center;
  justify-content: center;
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
    color: $white;
    outline: 0;
    box-shadow: 0 0 40px 40px $main-color inset;
  }

  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:active {
    transform: translateY(2px);
  }
}

.getLuck {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  flex-direction: row;
  flex-wrap: wrap;
}

.post__block {
  width: 250px;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 2px solid $main-color;
  border-radius: 0.6em;
  color: $main-color;
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
}

.post__title {
  margin: 0 auto;
  cursor: pointer;
}

.post__title--long {
  text-transform: initial;
  font-size: 10px;
}

.post__luck {
  margin-left: auto;
  color: $main-color-trasparent;
  cursor: auto;
}
</style>
