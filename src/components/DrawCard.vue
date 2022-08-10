<template>
  <p-card style="max-width: 650px" class="mx-auto my-5 shadow-6">
    <template #title>
      <div class="text-center">{{ title }}</div>
    </template>
    <template #content>
      <ul>
        <li>Game Amount: {{ gameAmount }}</li>
        <li>Jackpot: {{ jackpot }}$</li>
        <li>Numbers: {{ numbers.join(' ') }}</li>
        <li>Additional Numbers: {{ additionalNumbers.join(' ') }}</li>
      </ul>
    </template>
    <template #footer>
      <div class="flex justify-content-end">
        <p-button
          label="Won? Then get your prize"
          class="p-button-success"
          @click="isGetPrizeClicked = true"
        />
      </div>
      <p-dialog
        v-model:visible="isGetPrizeClicked"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
      >
        <p-image src="/nice-smack.gif" image-class="flex mx-auto" />
      </p-dialog>
    </template>
  </p-card>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue'

defineProps({
  date: {
    type: String,
    default: 'No Date',
  },
  title: {
    type: String,
    default: 'Some Title',
  },
  additionalNumbers: {
    type: Array as PropType<string[]>,
    default: () => ['0', '0'],
  },
  gameAmount: {
    type: String,
    default: '0',
  },
  jackpot: {
    type: String,
    default: '0',
  },
  numbers: {
    type: Array as PropType<string[]>,
    default: () => ['0', '0', '0', '0', '0'],
  },
})

const isGetPrizeClicked = ref(false)
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
}
</style>
