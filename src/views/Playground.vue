<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Carousel, Slide } from 'vue3-carousel'
import { LabelChip, ProfileCard } from '@/components'
import {
  profileList,
  quizList,
  QuizType,
  PLAYGROUND_AUTOPLAY_SECOND,
  PLAYGROUND_CAROUSEL_COUNT,
} from '@/constant'

const router = useRouter()
const selectedUser = ref(profileList[0])
const randomIdx = ref(0)
const autoplay = ref<number | undefined>(PLAYGROUND_AUTOPLAY_SECOND)
const isSelecting = ref(true)

const quizId = computed(() => router.currentRoute.value.query.quizId as string)
const currentQuiz = computed(() =>
  quizList.find((quiz) => quiz.id === quizId.value),
)
const quizType = computed(() => QuizType[currentQuiz.value?.type ?? 'helljiam'])
const quizTitle = computed(() => currentQuiz.value?.title)
const quizDifficulty = computed(() =>
  '⭐'.repeat(currentQuiz.value?.difficulty ?? 1),
)

onMounted(() => {
  const timer = setTimeout(() => {
    randomIdx.value = Math.floor(Math.random() * profileList.length)
    selectedUser.value = profileList.filter((v) => v.id !== 'wontae')[
      randomIdx.value
    ]
    autoplay.value = undefined
  }, 3000)
  return () => clearTimeout(timer)
})

watch(autoplay, (value) => {
  if (value === undefined) {
    const timer = setTimeout(() => {
      isSelecting.value = false
    }, 3000)

    return () => clearTimeout(timer)
  }
})
</script>
<template>
  <main class="min-h-screen overflow-hidden">
    <section class="w-4/5 mx-auto py-16 bg-[#0D1117]">
      <div class="container flex justify-center mx-auto px-4 md:px-6">
        <Transition name="fade-slide" mode="out-in">
          <div v-if="!isSelecting" class="grid gap-6 lg:gap-12 items-center">
            <div class="space-y-8 relative z-10">
              <div class="flex items-center gap-4">
                <LabelChip :name="quizType" />
                <span>{{ quizDifficulty }}</span>
                <span class="font-bold">{{ selectedUser.name }}</span>
              </div>
              <h1
                class="text-5xl leading-normal font-bold tracking-tighter text-[#F0F6FC]"
              >
                {{ quizTitle }}
              </h1>
              <div class="grid grid-cols-2 gap-12">
                <img
                  v-if="currentQuiz?.image"
                  :src="currentQuiz.image"
                  alt="info"
                />
                <div>
                  <div v-if="currentQuiz?.data">
                    <div
                      v-for="(item, idx) in currentQuiz?.data"
                      :key="item"
                      class="cursor-pointer flex-1 p-4 text-4xl font-bold underline underline-offset-8 hover:text-yellow-400"
                    >
                      {{ `${idx + 1}. ${item}` }}
                    </div>
                  </div>
                  <div v-else>정답을 외쳐 주세요!</div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="w-[540px] mx-auto flex flex-col gap-8">
            <h1
              class="text-5xl leading-normal font-bold tracking-tighter text-[#F0F6FC]"
            >
              문제 푸는 사람
              <span v-if="!autoplay">: {{ selectedUser.name }}</span>
            </h1>
            <div>
              <Carousel
                v-model="randomIdx"
                :items-to-show="PLAYGROUND_CAROUSEL_COUNT"
                :autoplay
                :wrap-around="true"
                :transition="0"
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
          </div>
        </Transition>
      </div>
    </section>
  </main>
</template>
<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter,
.fade-slide-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
