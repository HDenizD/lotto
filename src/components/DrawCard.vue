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
        <p-button label="Won? Then get your prize" class="p-button-success" />
      </div>
    </template>
  </p-card>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

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
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
}
</style>
