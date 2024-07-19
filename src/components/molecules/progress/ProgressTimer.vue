<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  time: number
}>()

const emits = defineEmits<{
  (event: 'timeEnd'): void
}>()

const progress = ref(0)

onMounted(() => {
  let startTime = Date.now()

  const updateProgress = () => {
    const elapsedTime = Date.now() - startTime
    progress.value = Math.min((elapsedTime / props.time) * 100, 100)
    if (progress.value < 100) {
      requestAnimationFrame(updateProgress)
    } else {
      emits('timeEnd')
    }
  }

  requestAnimationFrame(updateProgress)
})
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0 }"
    class="w-full h-12 rounded-3xl bg-slate-300"
  >
    <div
      class="relative h-full rounded-2xl bg-gradient-to-r from-yellow-600 to-red-800 transition-all ease-linear"
      :style="{ width: `${progress}%` }"
    >
      <img
        v-motion="'bounce'"
        :initial="{ scale: 1 }"
        :enter="{
          scale: 1.5,
          transition: {
            repeat: Infinity,
            repeatType: 'mirror',
          },
        }"
        class="absolute -top-6 right-2 w-24 h-24 object-contain rounded-full bg-[#14112e]"
        src="/images/logo.png"
        alt="logo"
      />
    </div>
  </div>
</template>

<style scoped></style>
