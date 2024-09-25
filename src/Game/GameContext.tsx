import React, { createContext, useEffect, useState } from 'react'

import { CategoryType, GameContextType, GameDataType, QuestionType, gameSchema } from '@/Game'

import gameData from './data.json'

const GameContext = createContext<GameContextType | undefined>(undefined)

const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameDataState, setGameDataState] = useState<GameDataType | null>(null)
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set())

  useEffect(() => {
    const parsedGameData = gameSchema.parse(gameData)
    setGameDataState(parsedGameData)
  }, [])

  const getRandomQuestion = (): { category: CategoryType; question: QuestionType } => {
    if (!gameDataState) throw 'gameDataState is not loaded'

    const availableQuestions: { category: CategoryType; question: QuestionType }[] = []

    gameDataState.categories.forEach((category) => {
      category.questions.forEach((question) => {
        if (!usedQuestions.has(question.id)) {
          availableQuestions.push({ category, question })
        }
      })
    })

    if (availableQuestions.length === 0) throw 'there is no available questions'

    const randomIndex = Math.floor(Math.random() * availableQuestions.length)
    const { category, question } = availableQuestions[randomIndex]

    setUsedQuestions((prevUsed) => {
      const updatedSet = new Set(prevUsed)
      updatedSet.add(question.id)
      return updatedSet
    })

    return { category, question }
  }

  if (!gameDataState) {
    return <div>Carregando...</div>
  }

  return (
    <GameContext.Provider value={{ gameData: gameDataState, getRandomQuestion }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameProvider }
