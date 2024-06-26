<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NavigationBar, Footer } from '@/components'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#0D1117] text-gray-50">
    <NavigationBar />
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <Footer />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
