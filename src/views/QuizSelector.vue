<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Carousel, Slide } from 'vue3-carousel'
import { SelectButton, ProfileCard, Timer } from '@/components'
import {
  SELECTOR_AUTOPLAY_SECOND,
  SELECTOR_CAROUSEL_COUNT,
  SELECTOR_START_TIMER_COUNT,
  SELECTOR_TRANSITION_SECOND,
  profileList,
  quizList,
} from '@/constant'

const router = useRouter()
const countdown = ref(false)
const currentSlide = ref(0)

const buttonLabel = computed(() =>
  countdown.value ? '🐵 들어가는 중' : '🐵 퀴즈 시작',
)

onMounted(() => {
  window.scrollTo(0, 0)
})

const onClickStart = () => {
  countdown.value = true
}

const onStartGame = () => {
  const randomId = Math.floor(Math.random() * quizList.length) + 1
  router.push({
    name: 'playground',
    query: {
      quizId: randomId,
    },
  })
}
</script>
<template>
  <main
    class="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-orange-900 overflow-hidden"
  >
    <section class="grid w-full py-12">
      <div
        class="container flex flex-col gap-12 items-center justify-center mx-auto px-4 md:px-6"
      >
        <div class="flex items-center">
          <div class="space-y-8 relative z-10">
            <h1
              class="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#F0F6FC]"
            >
              헬지암 놀이터에 오신 걸 환영합니다
            </h1>
            <p class="text-gray-300 md:text-xl">
              원하시는 퀴즈를 선택해 주세요
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-12 px-12 py-8 rounded-2xl">
          <div>
            <div class="text-xl px-6 font-semibold">헬지암인</div>
            <Carousel
              :model-value="currentSlide"
              :items-to-show="SELECTOR_CAROUSEL_COUNT"
              :autoplay="SELECTOR_AUTOPLAY_SECOND"
              :wrap-around="true"
              :transition="SELECTOR_TRANSITION_SECOND"
            >
              <Slide
                v-for="{
                  id,
                  name,
                  description,
                  birthday,
                  keyword,
                } in profileList"
                :key="id"
              >
                <ProfileCard
                  :id="id"
                  :name="name"
                  :description="description"
                  :birthday="birthday"
                  :keyword="keyword"
                />
              </Slide>
            </Carousel>
          </div>
          <div>
            <div class="text-xl px-6 font-semibold">퀴즈 리스트</div>
            <div class="flex flex-col p-6 gap-20">
              <div>아래 버튼을 누르면 10초 뒤에 퀴즈가 시작됩니다.</div>
              <div>
                <Timer
                  v-if="countdown"
                  :time="SELECTOR_START_TIMER_COUNT"
                  @time:end="onStartGame"
                />
              </div>
              <SelectButton :disabled="countdown" @click="onClickStart">
                {{ buttonLabel }}
              </SelectButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
