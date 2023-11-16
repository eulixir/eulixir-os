import { App } from '../@types/app'
import WeatherLogo from '../assets/icons/weather.png'

export const weather: App = {
  id: 2,
  dropdownItems: [
    {
      name: 'Weather',
      items: [{ name: 'Just testing', enabled: true, shortcut: 'A a a' }],
    },
    {
      name: 'File',
      items: [{ name: 'Just testing', enabled: true, shortcut: 'A a a' }],
    },
    {
      name: 'Edit',
      items: [{ name: 'Just testing', enabled: true, shortcut: 'A a a' }],
    },
    {
      name: 'Window',
      items: [{ name: 'Just testing', enabled: true, shortcut: 'A a a' }],
    },
    {
      name: 'Help',
      items: [{ name: 'Just testing', enabled: true, shortcut: 'A a a' }],
    },
  ],
  url: WeatherLogo,
  active: false,
  label: 'Weather',
  appName: 'Weather',
}
