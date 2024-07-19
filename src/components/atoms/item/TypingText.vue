<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  text: string
}>()

const displayedText = ref<string[]>([])

const getMotion = (index: number) => {
  return {
    initial: { opacity: 0, y: -10 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.05, duration: 50 },
    },
  }
}

watch(
  () => props.text,
  (newText) => {
    displayedText.value = []
    for (let i = 0; i < newText.length; i++) {
      setTimeout(() => {
        displayedText.value.push(newText[i])
      }, i * 100) // Adjust the delay as needed
    }
  },
  { immediate: true },
)
</script>
<template>
  <div class="inline-block text-6xl font-extrabold text-yellow-400">
    <span
      v-for="(char, index) in displayedText"
      :key="index"
      v-motion="getMotion(index)"
      class="pr-1 py-4"
    >
      {{ char }}
    </span>
  </div>
</template>

<style scoped></style>
