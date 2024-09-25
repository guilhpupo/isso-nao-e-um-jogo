import { GameProvider } from '@/Game'
import GameComponent from '@/Game/GameComponent'

const App = () => {
  return (
    <GameProvider>
      <GameComponent />
    </GameProvider>
  )
}

export { App }
