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
  <div class="posts">
    <div class="post" v-for="post in allPosts" :key="post.id">
      <div class="post__face">
        <h2 class="post__title">{{ post.name }}</h2>
        <template v-if="post.photo">
          <img :src="post.photo" :alt="post.name" class="post__photo" />
        </template>
      </div>
      <p class="post__address">{{ post.address }}</p>
      <p class="post__landmark">{{ post.landmark }}</p>
      <p class="post__item">
        Кухня: <strong>{{ post.cuisine }}</strong>
      </p>
      <p class="post__item">
        Идти <strong>{{ post.distance }} м</strong>
      </p>
      <p class="post__item">
        В путре: <strong>{{ post.time }}</strong> мин
      </p>
      <p class="post__item">
        Бизнес-ланч: <strong>{{ post.business_lunch ? "есть" : "нет" }}</strong>
      </p>
      <template v-if="post.business_lunch">
        <p class="post__item">
          Стоимость: <strong>{{ post.price }}</strong> рублей
        </p></template
      >
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
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 16px;
}
.post__face {
  display: flex;
  justify-content: space-evenly;
  width: -webkit-fill-available;
  height: 100px;
  margin-bottom: 15px;
}
.post__title {
}
.post__photo {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
.post__address {
}
.post__landmark {
  text-align: initial;
}
.post__item {
}
</style>
