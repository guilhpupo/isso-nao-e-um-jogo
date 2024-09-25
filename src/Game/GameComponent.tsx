import { useEffect, useState } from 'react'

import { CategoryType, QuestionType, useGame } from '@/Game'

const GameComponent = () => {
  const gameContext = useGame()

  const [showQuestion, setShowQuestion] = useState(false)
  const [randomQuestion, setRandomQuestion] = useState<{
    category: CategoryType
    question: QuestionType
  }>()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuestion(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [showQuestion])

  const handleClickNextQuestion = async () => {
    const newQuestion = gameContext.getRandomQuestion()

    setRandomQuestion(newQuestion)
    setShowQuestion(false)
  }

  if (!randomQuestion) {
    return <button onClick={handleClickNextQuestion}>Começar</button>
  }

  return (
    <div
      style={{ backgroundColor: randomQuestion.category.color }}
      className={`h-screen flex flex-col justify-between items-center p-16 lg:p-24`}
    >
      <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-mono text-center">
        {randomQuestion.category.name}
      </h1>

      {/* {!showQuestion && (
        <p className="text-2xl md:text-4xl lg:text-6xl text-white font-serif text-center absolute top-1/2 bottom-1/2">
          {randomQuestion.category.name}
        </p>
      )} */}

      {/* <p
        className={`text-2xl md:text-4xl lg:text-6xl text-white font-serif text-center transition-opacity transition-transform duration-1000 ease-out ${
          showQuestion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {randomQuestion.question.question}
      </p> */}
      <p
        className={`text-2xl md:text-4xl lg:text-6xl text-white font-serif text-center transition-opacity transition-transform duration-1000 ease-out ${
          showQuestion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {randomQuestion.question.question}
      </p>

      <section
        className={`flex gap-4 transition-opacity transition-transform duration-1000 ease-out ${
          showQuestion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* <button className="text-lg md:text-xl lg:text-3xl text-white font-mono text-center">
          PRÓXIMO
        </button>
        <span className="text-lg md:text-xl lg:text-3xl text-white font-mono text-center">|</span> */}
        <button
          onClick={handleClickNextQuestion}
          className="text-lg md:text-xl lg:text-3xl text-white font-mono text-center"
        >
          PRÓXIMO
        </button>
      </section>
    </div>
  )
}

export default GameComponent
