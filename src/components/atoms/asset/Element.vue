<script setup lang="ts">
import { type Component, computed, defineAsyncComponent } from 'vue'

const props = defineProps<{
  name: string
}>()

const iconComponent = computed(() => {
  const modules = import.meta.glob(`./icons/*.vue`)
  const entries = Object.entries(modules)
  const findModule = entries.find(([fileName]) => {
    const findName = './icons/' + props.name + '.vue'
    return fileName === findName
  })
  if (!findModule) throw new Error('cannot find icon component: ' + props.name)
  return defineAsyncComponent(async () => {
    return (await findModule[1]()) as Component
  })
})
</script>
<template>
  <div class="flex">
    <component :is="iconComponent" />
  </div>
</template>
<style scoped></style>
