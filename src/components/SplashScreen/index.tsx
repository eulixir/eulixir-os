import { useEffect, useState } from 'react'
import { AiFillApple } from 'react-icons/ai'
import { SplashScreenContainer, ProgressBar, RunningBar } from './styles'

interface SplashScreenProps {
  setSplashHasLoaded: () => void
}

export function SplashScreen({ setSplashHasLoaded }: SplashScreenProps) {
  const [filled, setFilled] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    setIsRunning(true)
  }, [])

  useEffect(() => {
    if (filled >= 70 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 1)), 50)
    }

    if (filled >= 30 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 100)
    }

    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 200)
    }

    if (filled >= 100) {
      setTimeout(() => {
        setIsRunning(false)
        setSplashHasLoaded()
      }, 500)
    }
  }, [filled, isRunning])

  return (
    <SplashScreenContainer>
      <AiFillApple size={150} />

      <ProgressBar>
        <RunningBar progress={filled} />
      </ProgressBar>
    </SplashScreenContainer>
  )
}
