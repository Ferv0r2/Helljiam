<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const onClickLogo = () => {
  router.push('/')
}
</script>

<template>
  <header class="px-4 lg:px-6 h-20 flex items-center border-b border-gray-700">
    <figure
      class="cursor-pointer flex items-center justify-center"
      href="/"
      @click="onClickLogo"
    >
      <img src="/images/logo.png" alt="logo" />
      <figcaption class="sr-only">헬지암팸</figcaption>
    </figure>
  </header>
</template>

<style scoped></style>
