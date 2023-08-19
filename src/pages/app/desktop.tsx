import { useEffect, useState } from 'react'
import { Dock } from '../../components/Dock'
import { MenuBar } from '../../components/MenuBar'
import { SplashScreen } from '../../components/SplashScreen'
import { CurrentAppContextProvider } from '../../contexts/currentApp'

import { DesktopContainer } from './styles'

interface DesktopProps {
  changeOsTheme: () => void
}

export function Desktop({ changeOsTheme }: DesktopProps) {
  const [hasLoaded, setHasLoaded] = useState(false)

  function setSplashHasLoaded() {
    setHasLoaded(true)
  }
  useEffect(() => {
    const alreadyLoaded = localStorage.getItem('splash-screen')

    if (alreadyLoaded) {
      setSplashHasLoaded()
    }
  }, [])

  return (
    <CurrentAppContextProvider>
      <DesktopContainer>
        {!hasLoaded && <SplashScreen setSplashHasLoaded={setSplashHasLoaded} />}
        <MenuBar changeOsTheme={changeOsTheme} />
        <Dock />
      </DesktopContainer>
    </CurrentAppContextProvider>
  )
}
