import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './pages/app/index'
import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/themes/dark'
import { lightTheme } from './styles/themes/light'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
)
