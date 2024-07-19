<script setup lang="ts">
defineProps<{
  disabled: boolean
}>()
</script>

<template>
  <button
    type="button"
    class="cursor-pointer w-full flex rounded-lg bg-zinc-200 text-zinc-600 p-6 text-2xl justify-center font-semibold hover:bg-zinc-300 disabled:bg-zinc-400 disabled:cursor-not-allowed"
    :disabled
  >
    <slot />
  </button>
</template>

<style scoped></style>
