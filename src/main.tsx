import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app/index'
import { WeatherContextProvider } from './contexts/weatherContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </React.StrictMode>,
)
