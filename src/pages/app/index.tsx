import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import { darkTheme } from '../../styles/themes/dark'
import { lightTheme } from '../../styles/themes/light'

import { Mobile } from './mobile'
import { getOsTheme } from '../../hooks/getOsTheme'
import { Desktop } from './desktop/desktop'

function App() {
  const [width, setWindowWidth] = useState<number>(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)
  const [theme, setTheme] = useState(
    getOsTheme() === 'dark' ? darkTheme : lightTheme,
  )

  function changeOsTheme() {
    const currentTheme = theme.title === 'light' ? darkTheme : lightTheme
    setTheme(currentTheme)

    localStorage.setItem('os-theme', currentTheme.title)
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
