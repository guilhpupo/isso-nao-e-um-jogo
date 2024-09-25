import { z } from 'zod'

import { categorySchema, gameSchema, questionSchema } from '@/Game'

type QuestionType = z.infer<typeof questionSchema>
type CategoryType = z.infer<typeof categorySchema>
type GameDataType = z.infer<typeof gameSchema>

type GameContextType = {
  gameData: GameDataType
  getRandomQuestion: () => { category: CategoryType; question: QuestionType }
}

export type { QuestionType, CategoryType, GameDataType, GameContextType }
