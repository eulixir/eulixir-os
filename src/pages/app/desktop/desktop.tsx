import { useEffect, useState } from 'react'
import { Dock } from '../../../components/Dock'
import { MenuBar } from '../../../components/MenuBar'
import { SplashScreen } from '../../../components/SplashScreen'
import { CurrentAppContextProvider } from '../../../contexts/currentAppContext'

import { DesktopContainer } from '../styles'

import { WeatherApp } from './weather'
import { AppWindowContextProvider } from '../../../contexts/appWindowContext'

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
      setHasLoaded(true)
    }
  }, [])

  return (
    <CurrentAppContextProvider>
      <AppWindowContextProvider>
        <DesktopContainer>
          {!hasLoaded && (
            <SplashScreen setSplashHasLoaded={setSplashHasLoaded} />
          )}
          <MenuBar changeOsTheme={changeOsTheme} />
          <WeatherApp />
          <Dock />
        </DesktopContainer>
      </AppWindowContextProvider>
    </CurrentAppContextProvider>
  )
}
