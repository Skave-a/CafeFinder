<script>
import Posts from "@/components/Posts";
export default {
  components: {
    Posts,
  },
};
</script>

<template>
  <div id="app">
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
  width: 400px;
}
</style>
