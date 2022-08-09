<template>
  <menu-bar class="mb-5" />
  <div class="px-3">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useApp } from '@/stores'
import { onMounted } from 'vue'
import MenuBar from '@/components/MenuBar.vue'

const appStore = useApp()

onMounted(() => {
  appStore.fetchDrawingResults()
})
</script>

<style lang="scss" scoped></style>
