<script setup lang="ts">
defineProps<{
  id: string
  name: string
  description: string
  birthday: string
  keyword: string[]
}>()
</script>

<template>
  <div
    class="group grid gap-4 place-content-start h-full p-6 rounded-lg transition-colors"
  >
    <div class="grid gap-4">
      <img
        class="w-full rounded-xl"
        :src="`src/assets/profile/${id}.png`"
        alt="profile"
      />
      <div class="flex justify-between items-center">
        <h3 class="text-xl font-bold text-[#F0F6FC]">{{ name }}</h3>
        <h3 class="text-lg font-semibold text-[#f9b382]">{{ birthday }}</h3>
      </div>
      <p class="text-start text-gray-400">
        {{ description }}
      </p>
    </div>
    <div class="flex gap-x-4 flex-wrap">
      <div v-for="word in keyword" :key="word">#{{ word }}</div>
    </div>
  </div>
</template>

<style scoped></style>
