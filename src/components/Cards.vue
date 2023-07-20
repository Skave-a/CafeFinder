<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "ShowRestaurants",
  setup() {
    const store = useStore();
    const allPosts = computed(() => store.getters.allPosts);

    onMounted(async () => {
      await store.dispatch("fetchPosts");
    });

    return {
      allPosts,
    };
  },
};
</script>

<template>
  <div class="posts">
    <div class="post" v-for="post in allPosts" :key="post.id">
      <div class="post__header">
        <div class="header__avatar">
          <div class="header__letter">
            {{ post.name.charAt(0) }}
          </div>
        </div>
        <div class="header__content">
          <span class="post__title">{{ post.name }}</span>
          <span class="post__address">{{ post.address }}</span>
          <span class="post__landmark">{{ post.landmark }}</span>
        </div>
      </div>

      <template v-if="post.photo">
        <div
          class="post__photo"
          :style="{ backgroundImage: `url(${post.photo})` }"
        ></div>
      </template>

      <template v-else>
        <div
          class="post__photo"
          :style="{
            backgroundImage: `url('https://images.unsplash.com/photo-1549032404-01ded1c8821b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')`,
          }"
        ></div>
      </template>

      <div class="post__block">
        <p class="post__item">
          <template v-if="post.cuisine">
            Кухня: <strong>{{ post.cuisine }}</strong>
          </template>
          <template v-else> Кухня: <strong>Неизвестно</strong> </template>
        </p>
        <p class="post__item">
          <template v-if="post.cuisine">
            Идти <strong>{{ post.distance }} м</strong>
          </template>
          <template v-else> Возможно где-то рядом =) </template>
        </p>
        <p class="post__item">
          <template v-if="post.cuisine">
            В пути: <strong>{{ post.time }}</strong> мин
          </template>
          <template v-else> И идти не долго </template>
        </p>
        <p class="post__item">
          Бизнес-ланч:
          <strong>{{ post.business_lunch ? "есть" : "нет" }}</strong>
        </p>
        <template v-if="post.business_lunch">
          <p class="post__item">
            Стоимость: <strong>{{ post.price }}</strong> рублей
          </p></template
        >
      </div>
    </div>
  </div>
</template>

<style>
.posts {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.post {
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  overflow: hidden;
  width: 300px;
  height: 422px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
.post__face {
  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
  height: 100px;
  margin-bottom: 15px;
  gap: 10px;
}

.post__item {
}

.post__header {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 16px;
  height: 62px;
}

.header__avatar {
  display: flex;
  flex: 0 0 auto;
  margin-right: 16px;
}

.header__letter {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  line-height: 1;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  color: rgb(255, 255, 255);
  background-color: #4f46e5;
}

.header__content {
  flex: 1 1 auto;
}

.post__title {
  margin: 0px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  display: block;
}

.post__address {
  margin: 0px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: rgba(0, 0, 0, 0.6);
  display: block;
}

.post__photo {
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 140px;
  width: -webkit-fill-available;
}

.post__landmark {
  font-size: 10px;
  color: rgba(79, 70, 229, 0.6);
}

.post__block {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}
</style>
