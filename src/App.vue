<template>blub</template>

<script setup lang="ts">
import axios from 'axios'

const myQuery = `{
  draw(type: "eurojackpot"){
    backendError
    draws {
      additionalNumbers
      date
      gameAmount
      jackpot
      megaPlier
      numbers
      odds {
        link
        numberOfWinners
        numbers
        odd
        winningClass
        withOptions
      }
      powerPlay
      seo {
        description
        texts {
          content
          headline
        }
        title
      }
      shares
      time
    }
    success
    visibleErrors {
      idents
      messages
    }
  }
}`

axios
  .get(`/api?query=${myQuery}`,)
  .then((res) => {
    console.log(res.data)
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
