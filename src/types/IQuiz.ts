export type QuizType = 'song' | 'sense' | 'character'

export type IQuiz = {
  type: QuizType
  title: string
  description: string
  data: string
  difficulty: number
  isHelljiam?: boolean
}
