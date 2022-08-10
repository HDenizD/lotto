<template>
  <p-card style="max-width: 650px" class="mx-auto shadow-6">
    <template #title>
      <div class="text-center test">Welcome Player 🤷</div>
    </template>
    <template #content>
      <div class="text-center">
        <div class="font-semibold mb-3">Do you wanna play a game?</div>
        <p-image v-if="noGamesToday" src="/sad-billy.png" image-class="image" />
        <p-image v-else src="/jigsaw.gif" image-class="image" />
      </div>
    </template>
    <template #footer>
      <div class="gap-2 flex justify-content-center">
        <p-button
          icon="pi pi-times"
          class="p-button-secondary"
          label='no, thanks. I "saw" the movies'
          @click="noGamesToday = true"
        />
        <p-button
          icon="pi pi-check"
          class="p-button-success"
          label="sure, of course ❤️"
          @click="$router.push('/games/eurojackpot')"
        />
      </div>
    </template>
  </p-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const noGamesToday = ref(false)
</script>

<style lang="scss" scoped>
:deep(img.image) {
  max-width: 300px;
  height: auto;
}
</style>
