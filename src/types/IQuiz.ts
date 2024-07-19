export type QuizType =
  | 'helljiam'
  | 'character'
  | 'game'
  | 'movie'
  | 'song'
  | 'etc'

export type IQuiz = {
  id: string
  type: QuizType
  title: string
  difficulty: number
  image: string | string[]
  data?: string[]
  answer: { text: string; image: string | null }
  isVideo?: boolean
}
