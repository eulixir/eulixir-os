import styles from './page.module.css'

import { MenuBar } from '../../components/MenuBar/index'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import { darkTheme } from '../../styles/themes/dark'
import { lightTheme } from '../../styles/themes/light'

function App() {
  const [theme, setTheme] = useState(lightTheme)

  function changeOsTheme() {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme)

    return
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={styles.homeContainer}>
          <MenuBar changeOsTheme={changeOsTheme} />
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
