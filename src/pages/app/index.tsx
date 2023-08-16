import styles from './page.module.css'

import { MenuBar } from '../../components/MenuBar/index'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import { darkTheme } from '../../styles/themes/dark'
import { lightTheme } from '../../styles/themes/light'
import { SplashScreen } from '../../components/SplashScreen'

function App() {
  const [theme, setTheme] = useState(
    getOsTheme() === 'dark' ? darkTheme : lightTheme
  )

  useEffect(() => {
    const alreadyLoaded = localStorage.getItem('splash-screen')

    if (alreadyLoaded) {
      setSplashHasLoaded()
    }
  }, [])

  function getOsTheme() {
    const localTheme = localStorage.getItem('os-theme')

    if (localTheme) {
      return localTheme
    }

    const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'

    return osTheme
  }

  const [hasLoaded, setHasLoaded] = useState(false)

  function changeOsTheme() {
    const currentTheme = theme.title === 'light' ? darkTheme : lightTheme
    setTheme(currentTheme)

    localStorage.setItem('os-theme', currentTheme.title)

    return
  }

  function setSplashHasLoaded() {
    setHasLoaded(true)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        {!hasLoaded && <SplashScreen setSplashHasLoaded={setSplashHasLoaded} />}
        <div className={styles.homeContainer}>
          <MenuBar changeOsTheme={changeOsTheme} />
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
