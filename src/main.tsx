import App from './pages/app/index'
import ReactDOM from 'react-dom/client'
import { WeatherContextProvider } from './contexts/weatherContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>,
)
