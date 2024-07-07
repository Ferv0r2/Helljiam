<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="inline-block rounded-lg bg-[#9945FF] px-3 py-1 text-sm">
    {{ name }}
  </div>
</template>

<style scoped></style>
