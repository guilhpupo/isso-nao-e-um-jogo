import { useContext } from 'react'

import { GameContext } from './GameContext'

const useGame = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGame deve ser usado dentro de um GameProvider')
  }
  return context
}

export { useGame }
