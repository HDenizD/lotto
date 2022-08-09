<template>
  <draw-card
    v-for="(draw, index) in appStore.getDraws"
    :key="index"
    :title="draw.seo.title"
    :date="draw.date"
    :gameAmount="draw.gameAmount"
    :jackpot="draw.jackpot"
    :numbers="draw.numbers"
    :additionalNumbers="draw.additionalNumbers"
  />
</template>

<script setup lang="ts">
import DrawCard from '@/components/DrawCard.vue'
import { useApp } from '@/stores'
// import { onMounted } from 'vue'

const appStore = useApp()

// onMounted(() => {
//   appStore.fetchDrawingResults()
// })
</script>

<style lang="scss" scoped></style>
