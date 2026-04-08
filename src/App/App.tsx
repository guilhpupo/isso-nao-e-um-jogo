import { useState } from 'react'

import { GameProvider } from '@/Game'
import GameComponent from '@/Game/GameComponent'

import { StartScreen } from './StartScreen'

const App = () => {
  const [started, setStarted] = useState(false)

  return (
    <GameProvider>
      {started ? <GameComponent /> : <StartScreen onStart={() => setStarted(true)} />}
    </GameProvider>
  )
}

export { App }
