import styles from './page.module.css'

import { MenuBar } from '../../components/MenuBar/index'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import { darkTheme } from '../../styles/themes/dark'
import { lightTheme } from '../../styles/themes/light'
import { SplashScreen } from '../../components/SplashScreen'

function App() {
  const [theme, setTheme] = useState(darkTheme)

  const [hasLoaded, setHasLoaded] = useState(false)

  function changeOsTheme() {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme)

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
