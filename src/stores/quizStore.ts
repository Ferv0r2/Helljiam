import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quizStore', () => {
  const alreadyQuiz: string[] = []

  return { alreadyQuiz }
})
