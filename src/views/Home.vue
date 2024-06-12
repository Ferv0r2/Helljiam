<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isClicked = ref(false)

const startButtonMessage = computed(() =>
  isClicked.value ? '아직 준비중임 ㅋㅋ' : '자~ 퀴즈 드가자',
)

const onClickLogo = () => {
  router.push('/')
}

const onClickStart = () => {
  isClicked.value = true
}
</script>
<template>
  <div class="flex flex-col min-h-[100dvh] bg-[#0D1117] text-gray-50">
    <header
      class="px-4 lg:px-6 h-20 flex items-center border-b border-gray-700"
    >
      <figure
        class="flex items-center justify-center"
        href="/"
        @click="onClickLogo"
      >
        <img src="/images/logo.png" alt="logo" />
        <figcaption class="sr-only">헬지암팸</figcaption>
      </figure>
    </header>
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
      <section class="w-full py-12 md:py-24 lg:py-32 bg-[#0D1117]">
        <div
          class="container flex flex-col justify-center mx-auto px-4 md:px-6"
        >
          <div
            class="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div class="space-y-2">
              <div
                class="inline-block rounded-lg bg-[#9945FF] px-3 py-1 text-sm"
              >
                Feature
              </div>
              <h2
                class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#F0F6FC]"
              >
                제품 기능 소개
              </h2>
              <p
                class="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                대충 맨날 먹던 거랑 마이너한거 섞은 퀴즈가 나갈 예정, 어느 정도
                퀄리티로 갈지는 내 맘대로 할 것으로 보이며 귀찮아서 여행
                다녀와도 준비 중일 수 있음
              </p>
            </div>
          </div>
          <div
            class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12"
          >
            <div
              class="group grid gap-4 p-6 rounded-lg bg-[#161B22] hover:bg-[#1F2732] transition-colors"
            >
              <div
                class="bg-[#9945FF] rounded-md flex items-center justify-center aspect-square w-12 h-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 text-gray-50"
                >
                  <path
                    d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"
                  ></path>
                  <path d="m13 12-3 5h4l-3 5"></path>
                </svg>
              </div>
              <div class="grid gap-1">
                <h3 class="text-xl font-bold text-[#F0F6FC]">
                  빨리 맞추는 문제
                </h3>
                <p class="text-gray-400">
                  매우 쉽지만 순발력이 필요한 게임이 들어갈 예정, 노래 맞추기나
                  인물 퀴즈를 넣으려고 하며 우리만 아는 지인이 나올 수도 있음
                </p>
              </div>
            </div>
            <div
              class="group grid gap-4 p-6 rounded-lg bg-[#161B22] hover:bg-[#1F2732] transition-colors"
            >
              <div
                class="bg-[#9945FF] rounded-md flex items-center justify-center aspect-square w-12 h-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 text-gray-50"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  ></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div class="grid gap-1">
                <h3 class="text-xl font-bold text-[#F0F6FC]">
                  프라이빗한 문제
                </h3>
                <p class="text-gray-400">
                  대중적으로 알 수 없지만 우리만 아는 문제를 넣을 예정. 즉,
                  굉장히 마이너한 문제가 출제될 수 있으며 수치스러울 수 있음
                </p>
              </div>
            </div>
            <div
              class="group grid gap-4 p-6 rounded-lg bg-[#161B22] hover:bg-[#1F2732] transition-colors"
            >
              <div
                class="bg-[#9945FF] rounded-md flex items-center justify-center aspect-square w-12 h-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 text-gray-50"
                >
                  <path
                    d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
                  ></path>
                  <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                  <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                </svg>
              </div>
              <div class="grid gap-1">
                <h3 class="text-xl font-bold text-[#F0F6FC]">
                  헬지암 역사와 데이터 누적
                </h3>
                <p class="text-gray-400">
                  우리들의 사진이 대거 나타날 수 있음, 혹시나 문제로 낼 수 있는
                  이미지를 추천한다면 제품에 포함될 수 있음
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="w-full pb-12 md:pb-24 lg:pb-32 bg-[#0D1117]">
        <div
          class="container flex flex-col justify-center mx-auto px-4 md:px-6"
        >
          <div
            class="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div class="space-y-2">
              <div
                class="inline-block rounded-lg bg-[#9945FF] px-3 py-1 text-sm"
              >
                Roadmap
              </div>
              <h2
                class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#F0F6FC]"
              >
                앞으로 만들어 지는 방식에 대하여
              </h2>
              <p
                class="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                이게 재미있으려면 큰 스크린이 필요하기 함, 문제를 푸는 사람 역시
                매 순간마다 랜덤으로 뽑을 예정인데 내 느낌 상으로는 재밌을 것
                같음
              </p>
            </div>
          </div>
          <div
            class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12"
          >
            <div
              class="group grid gap-4 p-6 rounded-lg bg-[#161B22] hover:bg-[#1F2732] transition-colors"
            >
              <div
                class="bg-[#9945FF] rounded-md flex items-center justify-center aspect-square w-12 h-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 text-gray-50"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>
              <div class="grid gap-1">
                <h3 class="text-xl font-bold text-[#F0F6FC]">1차 목표</h3>
                <p class="text-gray-400">
                  이번 여행 일정에 맞춰서 퀴즈까지 포함하여 대강 넣어 놓을 예정,
                  웹페이지를 배포할 생각이며, 우리의 개인 정보를 지키기 위해
                  admin 로그인 하나만 해둘듯
                </p>
              </div>
            </div>
            <div
              class="group grid gap-4 p-6 rounded-lg bg-[#161B22] hover:bg-[#1F2732] transition-colors"
            >
              <div
                class="bg-[#9945FF] rounded-md flex items-center justify-center aspect-square w-12 h-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 text-gray-50"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <div class="grid gap-1">
                <h3 class="text-xl font-bold text-[#F0F6FC]">2차 목표</h3>
                <p class="text-gray-400">
                  헬지암 게시판을 둘 예정, 서버는 대충 무료 찾아볼듯. 좀
                  재밌다고 판단되면 마이너한 헬지암 빼고 공유해서 집단에 상관
                  없이 즐길 수 있도록 해보려고 함
                </p>
              </div>
            </div>
            <div
              class="group grid gap-4 p-6 rounded-lg bg-[#161B22] hover:bg-[#1F2732] transition-colors"
            >
              <div
                class="bg-[#9945FF] rounded-md flex items-center justify-center aspect-square w-12 h-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6 text-gray-50"
                >
                  <path
                    d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                  ></path>
                  <path
                    d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                  ></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
              </div>
              <div class="grid gap-1">
                <h3 class="text-xl font-bold text-[#F0F6FC]">최종 목표</h3>
                <p class="text-gray-400">
                  여태 여행마다 게임이 재밌었으니 일단 재밌었으면 좋겠음,
                  재밌으면 저작권과 우리 개인에 관련한 부분을 전부 쳐내고 퀴즈
                  앱으로 하나 내보낼 의향이 있음
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-[#020a0c] text-gray-300">
      <div class="max-w-[1200px] mx-auto p-8">
        <div
          class="flex sm:flex-row flex-col gap-4 items-start sm:items-center justify-between"
        >
          <div class="flex items-center">
            <div class="relative w-6 h-6 mr-2">
              <img src="/images/author.png" alt="author" />
            </div>
            <h2 class="font-bold">Ferv0r2</h2>
          </div>
          <div class="text-sm">
            <span class="mr-2">&copy;</span>
            <span>2024. Ferv0r2 ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped></style>
