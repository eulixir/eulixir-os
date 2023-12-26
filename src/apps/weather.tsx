import { App, ItemDropdown } from '../@types/app'
import WeatherLogo from '../assets/icons/weather.png'
import { WeatherApp } from '../pages/app/desktop/weather'

export const weatherDropdownItems = (): ItemDropdown[] => {
  const items = [
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
  ]

  return items
}

export const weather: App = {
  id: 3,
  dropdownItems: weatherDropdownItems(),
  url: WeatherLogo,
  label: 'Weather',
  active: true,
  appName: 'Weather',
  component: <WeatherApp />,
}
