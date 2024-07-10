export type QuizType = 'song' | 'helljiam' | 'character' | 'etc'

export type IQuiz = {
  id: string
  type: QuizType
  title: string
  difficulty: number
  image: string
  data?: string[]
  answer: { text: string; image: string | null }
}
