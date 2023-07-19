<script>
import Posts from "@/components/Posts";
import Post from "@/components/Post";
export default {
  components: {
    Posts,
    Post,
  },
};
</script>

<template>
  <div id="app">
    <Post />
    <Posts />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  padding: 20px;
}
p {
  margin: 0;
}
</style>
