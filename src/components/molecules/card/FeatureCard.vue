<script setup lang="ts">
import { Element } from '@/components'

defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <div
    class="group grid gap-4 p-6 rounded-lg bg-[#161B22] hover:bg-[#1F2732] transition-colors"
  >
    <div
      class="bg-[#9945FF] rounded-md flex items-center justify-center aspect-square w-12 h-12"
    >
      <Element :name="icon" />
    </div>
    <div class="grid gap-1">
      <h3 class="text-xl font-bold text-[#F0F6FC]">{{ title }}</h3>
      <p class="text-gray-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
