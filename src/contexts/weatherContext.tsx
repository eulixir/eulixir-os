import { createContext, ReactNode } from 'react'
import { WeatherApp } from '../pages/desktop/Weather'

interface WeatherContextProviderProps {
  children: ReactNode
}

interface WeatherContextProviderType {
  location: object
}

export const WeatherContext = createContext({} as WeatherContextProviderType)

export function WeatherContextProvider({
  children,
}: WeatherContextProviderProps) {
  // const [location, setLocation] = useState({})

  const location = {}

  // useEffect(() => {
  //   if (!navigator.geolocation) {
  //     console.log('Geolocation is not supported by your browser')
  //     return
  //   }

  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords
  //       setLocation({ latitude, longitude })
  //     },
  //     (err) => {
  //       console.log(`Error getting location: ${err.message}`)
  //     },
  //   )
  // }, [])

  return (
    <WeatherContext.Provider value={{ location }}>
      <WeatherApp />
      {children}
    </WeatherContext.Provider>
  )
}
