<script setup lang="ts">
import { LabelChip } from '@/components'
defineProps<{
  chip: string
  title: string
  description: string
}>()
</script>

<template>
  <section class="w-full py-12 md:py-24 lg:py-32 bg-[#0D1117]">
    <div class="container flex flex-col justify-center mx-auto px-4 md:px-6">
      <div
        class="flex flex-col items-center justify-center space-y-4 text-center"
      >
        <div class="space-y-2">
          <LabelChip :name="chip" />
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#F0F6FC]"
          >
            {{ title }}
          </h2>
          <p
            class="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            {{ description }}
          </p>
        </div>
      </div>
      <slot />
    </div>
  </section>
</template>

<style scoped></style>
