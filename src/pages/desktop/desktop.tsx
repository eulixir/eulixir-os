import { useEffect, useState } from 'react'
import { Dock } from '../../components/Dock'
import { MenuBar } from '../../components/MenuBar'
import { SplashScreen } from '../../components/SplashScreen'
import { CurrentAppContextProvider } from '../../contexts/currentAppContext'

import { DesktopContainer } from '../styles'

import { ProcessContextProvider } from '../../contexts/processContext'

import { WindowManagement } from './windowManagement'
import { SystemSettingsContextProvider } from '../../contexts/SystemSettinsContext'
import { setupConfigService } from '../../services/globalConfigs/setup'

interface DesktopProps {
  changeOsTheme: () => void
}

export function Desktop({ changeOsTheme }: DesktopProps) {
  setupConfigService()

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
      <SystemSettingsContextProvider>
        <ProcessContextProvider>
          <DesktopContainer>
            {!hasLoaded && (
              <SplashScreen setSplashHasLoaded={setSplashHasLoaded} />
            )}
            <MenuBar changeOsTheme={changeOsTheme} />
            <WindowManagement />
            <Dock />
          </DesktopContainer>
        </ProcessContextProvider>
      </SystemSettingsContextProvider>
    </CurrentAppContextProvider>
  )
}
