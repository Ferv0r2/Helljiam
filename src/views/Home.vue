<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  NavigationBar,
  IntroduceContainer,
  FeatureCard,
  Footer,
} from '@/components'
import { featureData, roadmapData } from '@/constant'

const isClicked = ref(false)

const startButtonMessage = computed(() =>
  isClicked.value ? '아직 준비중임 ㅋㅋ' : '자~ 퀴즈 드가자',
)

const onClickStart = () => {
  isClicked.value = true
}
</script>
<template>
  <div class="flex flex-col min-h-[100dvh] bg-[#0D1117] text-gray-50">
    <NavigationBar />
    <main class="flex-1">
      <section
        class="w-full py-12 md:py-24 lg:py-32 bg-[#0D1117] overflow-hidden"
      >
        <div class="container flex justify-center mx-auto px-4 md:px-6">
          <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div class="space-y-4 relative z-10">
              <div
                class="inline-block rounded-lg bg-[#9945FF] px-3 py-1 text-sm"
              >
                Introduce
              </div>
              <h1
                class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#F0F6FC]"
              >
                헬지암 놀이터
              </h1>
              <p class="max-w-[600px] text-gray-400 md:text-xl">
                헬지암팸은 12년(?) 전통의 얕은 우정으로 구성된 친목 모임입니다.
                그들은 대체적으로 연애 경험이 적으며 게임을 좋아하고 옷을 자주
                사입는 편은 아닌 경우가 많습니다.
              </p>
              <div class="flex flex-col gap-2 min-[400px]:flex-row">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-xl bg-[#9945FF] px-8 py-4 text-xl font-bold text-gray-50 shadow transition-colors hover:bg-[#8037d4] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9945FF] disabled:pointer-events-none disabled:opacity-50 duration-300"
                  :disabled="isClicked"
                  @click="onClickStart"
                >
                  {{ startButtonMessage }}
                </button>
              </div>
            </div>
            <div class="relative">
              <div
                class="absolute -top-[20%] -right-[20%] w-[150%] h-[150%] bg-gradient-to-r from-[#9945FF] to-[#5B21B6] opacity-50 blur-[100px] animate-blob"
              />
              <div
                class="absolute -bottom-[20%] -left-[20%] w-[150%] h-[150%] bg-gradient-to-l from-[#9945FF] to-[#5B21B6] opacity-50 blur-[100px] animate-blob"
              />
              <div class="relative z-10">
                <img
                  src="/images/banner.png"
                  width="600"
                  height="600"
                  alt="Blockchain Hero"
                  class="mx-auto overflow-hidden rounded-xl object-cover shadow-xl"
                  style="filter: invert(0)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <IntroduceContainer
        chip="Feature"
        title="제품 기능 소개"
        description="대충 맨날 먹던 거랑 마이너한거 섞은 퀴즈가 나갈 예정, 어느 정도
                퀄리티로 갈지는 내 맘대로 할 것으로 보이며 귀찮아서 여행
                다녀와도 준비 중일 수 있음"
      >
        <div
          class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12"
        >
          <FeatureCard
            v-for="{ id, icon, title, description } in featureData"
            :key="id"
            :icon
            :title
            :description
          />
        </div>
      </IntroduceContainer>
      <IntroduceContainer
        chip="Roadmap"
        title="앞으로 만들어 지는 방식에 대하여"
        description="이게 재미있으려면 큰 스크린이 필요하기 함, 문제를 푸는 사람 역시
                매 순간마다 랜덤으로 뽑을 예정인데 내 느낌 상으로는 재밌을 것
                같음"
        padding="pb-12 md:pb-24 lg:pb-32"
      >
        <div
          class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12"
        >
          <FeatureCard
            v-for="{ id, icon, title, description } in roadmapData"
            :key="id"
            :icon
            :title
            :description
          />
        </div>
      </IntroduceContainer>
    </main>
    <Footer />
  </div>
</template>
<style scoped></style>
