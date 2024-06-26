<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useAssetsLoader } from '@/composables'
import router from '@/router'

const assets = [
  '/images/author.png',
  '/images/banner.png',
  '/images/logo.png',
  '/images/og-banner.png',
]

const { loaded, progress, loadAssets } = useAssetsLoader(assets)

const onMovePlayground = () => {
  router.replace({
    name: 'playground',
  })
}

onMounted(() => {
  if (loaded.value) {
    onMovePlayground()
    return
  }
  loadAssets()
})

watch(loaded, (value) => value && onMovePlayground())
</script>
<template>
  <main class="min-h-screen">
    <section
      class="w-full py-12 md:py-24 lg:py-32 bg-[#0D1117] overflow-hidden"
    >
      <div
        class="container flex flex-col items-center justify-center mx-auto gap-12"
      >
        <div class="space-y-4 relative z-10">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#F0F6FC]"
          >
            에셋 로딩 중
          </h1>
        </div>
        <div class="bg-gray-100 w-3/4 h-12 rounded-md">
          <div
            class="bg-indigo-600 h-12 transition-all duration-300"
            :class="`w-[${progress}%]`"
          />
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped></style>
