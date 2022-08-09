<template>
  <p-menubar :model="items" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    label: 'Welcome',
    to: '/',
  },
  {
    label: 'Games',
    items: [
      {
        label: 'Euro Jackpot',
        to: '/games/eurojackpot',
      },
      {
        label: 'Game 2',
        to: '/no-game-found',
      },
      {
        label: 'Game 3',
        to: '/no-game-found',
      },
    ],
  },
])
</script>

<style lang="scss" scoped></style>
