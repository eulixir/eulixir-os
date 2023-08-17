import { useEffect, useState } from 'react'
import { MenuBar } from '../../components/MenuBar'
import { SplashScreen } from '../../components/SplashScreen'

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
    <>
      <DesktopContainer>
        {!hasLoaded && <SplashScreen setSplashHasLoaded={setSplashHasLoaded} />}
        <MenuBar changeOsTheme={changeOsTheme} />
      </DesktopContainer>
    </>
  )
}
