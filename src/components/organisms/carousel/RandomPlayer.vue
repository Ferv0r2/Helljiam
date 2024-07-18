<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import { ProfileCard } from '@/components'
import { playerList, PLAYGROUND_CAROUSEL_COUNT } from '@/constant'

defineProps<{
  autoplay?: number
  selectedName: string
  randomIdx: number
}>()
</script>

<template>
  <div class="w-[540px] mx-auto flex flex-col gap-8">
    <h1
      class="text-5xl leading-normal font-bold tracking-tighter text-[#F0F6FC]"
    >
      문제 푸는 사람
      <!-- <span v-if="!autoplay">: {{ selectedName }}</span> -->
    </h1>
    <div>
      <Carousel
        :model-value="randomIdx"
        :items-to-show="PLAYGROUND_CAROUSEL_COUNT"
        :autoplay
        :wrap-around="true"
        :transition="0"
      >
        <Slide
          v-for="{ id, name, description, birthday, keyword } in playerList"
          :key="id"
        >
          <ProfileCard :id :name :description :birthday :keyword />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
