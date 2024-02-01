import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { Mobile } from './mobile'

import { Desktop } from './desktop/desktop'

import { GlobalStyle } from '../styles/global'
import { darkTheme } from '../styles/themes/dark/dark'
import { lightTheme } from '../styles/themes/light/light'
import { getGlobalConfigs } from '../services/globalConfigs/getGlobalConfigs'
import { updateConfig } from '../services/globalConfigs/updateConfig'

function App() {
  const [width, setWindowWidth] = useState<number>(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)

  const { theme: storedTheme } = getGlobalConfigs()

  const [theme, setTheme] = useState(
    storedTheme === 'dark' ? darkTheme : lightTheme,
  )

  function changeOsTheme() {
    const currentTheme = theme.title === 'light' ? darkTheme : lightTheme
    setTheme(currentTheme)

    updateConfig({ theme: currentTheme.title })
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    setIsMobile(width < 800)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [width])

  return (
    <>
      <ThemeProvider theme={theme}>
        {!isMobile ? (
          <Desktop changeOsTheme={changeOsTheme} />
        ) : (
          <Mobile changeOsTheme={changeOsTheme} />
        )}

        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
