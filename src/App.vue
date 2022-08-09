<template>blub</template>

<script setup lang="ts">
import axios from 'axios'

const myQuery = `{
  draw(date:"Aug 07 2022", type:"eurojackpot", limit:1) {
    draws
  }
}`

axios
  .get(`/api?query=${myQuery}`,)
  .then((res) => {
    console.log(res.data)
    console.log(...res.data.errors)
  })
  .catch((err) => {
    console.log(err)
  })
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
