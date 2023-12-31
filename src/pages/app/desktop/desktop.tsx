import { useEffect, useState } from 'react'
import { Dock } from '../../../components/Dock'
import { MenuBar } from '../../../components/MenuBar'
import { SplashScreen } from '../../../components/SplashScreen'
import { CurrentAppContextProvider } from '../../../contexts/currentAppContext'

import { DesktopContainer } from '../styles'

import { ProcessContextProvider } from '../../../contexts/processContext'

import { AppWindowManagement } from './appWindowManagement'
// import { WeatherApp } from './weather'

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
      <ProcessContextProvider>
        <DesktopContainer>
          {!hasLoaded && (
            <SplashScreen setSplashHasLoaded={setSplashHasLoaded} />
          )}
          <MenuBar changeOsTheme={changeOsTheme} />
          <AppWindowManagement />
          <Dock />
        </DesktopContainer>
      </ProcessContextProvider>
    </CurrentAppContextProvider>
  )
}
