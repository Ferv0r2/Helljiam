<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
<template>
  <main class="min-h-screen">
    <section
      class="w-full py-12 md:py-24 lg:py-32 bg-[#0D1117] overflow-hidden"
    >
      <div class="container flex justify-center mx-auto px-4 md:px-6">
        <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div class="space-y-4 relative z-10">
            <div class="inline-block rounded-lg bg-[#9945FF] px-3 py-1 text-sm">
              퀴즈 타입
            </div>
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#F0F6FC]"
            >
              퀴즈 제목
            </h1>
            <p class="text-gray-400 md:text-xl">퀴즈 설명</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped></style>
