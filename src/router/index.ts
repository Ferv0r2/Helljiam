import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/quiz-selector',
      name: 'quiz-selector',
      component: () => import('@/views/QuizSelector.vue'),
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('@/views/Playground.vue'),
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('@/views/AssetsLoading.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/TestView.vue'),
    },
  ],
})

export default router
