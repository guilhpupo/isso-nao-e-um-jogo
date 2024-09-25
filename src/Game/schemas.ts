import { z } from 'zod'

const questionSchema = z.object({
  id: z.string(),
  question: z.string(),
})

const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  questions: z.array(questionSchema),
})

const gameSchema = z.object({
  categories: z.array(categorySchema),
})

export { questionSchema, categorySchema, gameSchema }
