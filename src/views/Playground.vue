<script setup lang="ts">
import { computed, onMounted, onUnmounted, provide, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  LabelChip,
  RandomPlayer,
  ProgressTimer,
  SelectButton,
  TypingText,
} from '@/components'
import {
  playerList,
  quizList,
  QuizType,
  PLAYGROUND_AUTOPLAY_SECOND,
  PLAYGROUND_QUIZ_TIMER,
} from '@/constant'
import { useQuizStore } from '@/stores/quizStore'

const router = useRouter()
const quizStore = useQuizStore()
const selectedUser = ref(playerList[0])
const randomIdx = ref(0)
const autoplay = ref<number | undefined>(PLAYGROUND_AUTOPLAY_SECOND)
const isSelecting = ref(true)
const timeEnd = ref(false)
const isShowingAnswer = ref(false)

const quizId = computed(() => router.currentRoute.value.query.quizId as string)
const currentQuiz = computed(() =>
  quizList.find((quiz) => quiz.id === quizId.value),
)
const quizType = computed(() => QuizType[currentQuiz.value?.type ?? 'helljiam'])
const quizTitle = computed(() => currentQuiz.value?.title)
const quizDifficulty = computed(() =>
  '⭐'.repeat(currentQuiz.value?.difficulty ?? 1),
)

let timerId: number | null = null

const startTimer = () => {
  timerId = window.setTimeout(() => {
    randomIdx.value = Math.floor(Math.random() * playerList.length)
    selectedUser.value = playerList[randomIdx.value]
    autoplay.value = undefined
  }, 3000)
}

const stopTimer = () => {
  if (timerId !== null) {
    clearTimeout(timerId)
    timerId = null
  }
}

const onEndTime = () => {
  timeEnd.value = true
}

const onShowAnswer = () => {
  isShowingAnswer.value = true
}

const onClickNextQuiz = () => {
  quizStore.alreadyQuiz = [...quizStore.alreadyQuiz, quizId.value]

  let randomId
  const maxAttempts = quizList.length // 최대 시도 횟수를 퀴즈 리스트 길이로 설정

  for (let i = 0; i < maxAttempts; i++) {
    randomId = Math.floor(Math.random() * quizList.length) + 1

    // 이미 존재하는 ID가 아니라면 루프를 탈출
    if (!quizStore.alreadyQuiz.includes(String(randomId))) {
      break
    }

    // 모든 퀴즈가 이미 추출된 경우를 처리
    if (i === maxAttempts - 1) {
      randomId = null // 모든 퀴즈가 추출된 경우 null로 설정
    }
  }

  if (randomId !== null) {
    timeEnd.value = false
    isShowingAnswer.value = false
    isSelecting.value = true
    autoplay.value = PLAYGROUND_AUTOPLAY_SECOND
    startTimer()
    router.push({
      name: 'playground',
      query: {
        quizId: randomId,
      },
    })
  } else {
    // 모든 퀴즈가 이미 추출된 경우 처리
    console.log('모든 퀴즈를 완료했습니다.')
  }
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})

watch(autoplay, (value) => {
  if (value === undefined) {
    const timer = setTimeout(() => {
      isSelecting.value = false
    }, 3000)

    return () => clearTimeout(timer)
  }
})
provide('randomIdx', randomIdx)
</script>
<template>
  <main class="min-h-screen overflow-hidden">
    <section class="w-4/5 mx-auto py-16 bg-[#0D1117]">
      <div class="container flex justify-center mx-auto px-4 md:px-6">
        <Transition name="fade-slide" mode="out-in">
          <div
            v-if="!isSelecting"
            class="grid max-w-[1200px] w-full gap-6 lg:gap-12 items-center"
          >
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
                  class="max-h-[480px]"
                  :src="currentQuiz.image"
                  alt="info"
                />
                <div v-if="currentQuiz?.data">
                  <div
                    v-for="item in currentQuiz.data"
                    :key="item"
                    class="cursor-pointer flex-1 p-4 text-4xl font-bold underline underline-offset-8 hover:text-yellow-400"
                  >
                    {{ item }}
                  </div>
                </div>
                <div>
                  <div
                    v-motion-slide-visible-bottom
                    class="font-bold text-5xl mt-20 text-yellow-400 bg-black text-center p-4"
                  >
                    <span v-if="!isShowingAnswer">정답을 외쳐 주세요!</span>
                    <span v-else>
                      <TypingText :text="currentQuiz?.answer.text ?? ''" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <template v-if="!isShowingAnswer">
              <ProgressTimer
                v-if="!timeEnd"
                :time="PLAYGROUND_QUIZ_TIMER"
                @time-end="onEndTime"
              />
              <button
                v-else
                v-motion-roll-visible-right
                type="button"
                class="cursor-pointer w-full bg-slate-500 p-6 rounded-2xl text-center text-3xl font-bold hover:bg-slate-600"
                @click="onShowAnswer"
              >
                ⭐ 정답 보기 ⭐
              </button>
            </template>
            <div v-else class="flex flex-col gap-8">
              <SelectButton
                v-motion-roll-visible-bottom
                :disabled="false"
                @click="onClickNextQuiz"
              >
                ▶️ 다음 문제
              </SelectButton>
            </div>
          </div>
          <RandomPlayer v-else :autoplay :selected-name="selectedUser.name" />
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
