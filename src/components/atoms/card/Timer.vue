<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{
  time: number
}>()

const emits = defineEmits<{
  (event: 'time:end'): void
}>()

const timeRemaining = ref(props.time)
const animate = ref(false)

onMounted(() => {
  const interval = setInterval(() => {
    if (timeRemaining.value > 0) {
      timeRemaining.value -= 1
      timeRemaining.value === 0 ? emits('time:end') : ''
      return
    }
    clearInterval(interval)
  }, 1000)

  return () => clearInterval(interval)
})

watch(timeRemaining, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    animate.value = true
    setTimeout(() => {
      animate.value = false
    }, 100)
  }
})
</script>

<template>
  <div class="flex items-center justify-center bg-background">
    <div class="bg-card rounded-lg p-8">
      <div
        class="text-8xl font-bold text-primary-foreground transition-transform"
        :class="animate ? 'scale-125' : ''"
      >
        {{ timeRemaining }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
