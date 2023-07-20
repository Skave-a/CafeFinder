<script>
import Cards from "@/components/Cards";
import Card from "@/components/Card";
export default {
  components: {
    Cards,
    Card,
  },
};
</script>

<template>
  <Card />
  <Cards />
</template>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
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
