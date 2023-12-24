import { createContext, ReactNode, useState } from 'react'

import { apps } from '../apps/appService'

import { App } from '../@types/app'

interface CurrentAppContextProviderProps {
  children: ReactNode
}

interface CurrentAppType {
  currentApp: App
  apps: App[]
  setNewCurrentApp: (appId: number) => void
}

export const CurrentAppContext = createContext({} as CurrentAppType)

export function CurrentAppContextProvider({
  children,
}: CurrentAppContextProviderProps) {
  const [currentApp, setCurrentApp] = useState(apps[0])

  const [icons, setIcons] = useState(apps)

  function handleActiveIcon(label: string) {
    const newIcons = icons.map((icon) => {
      if (icon.label === label) {
        return {
          ...icon,
          active: true,
        }
      }
      return {
        ...icon,
        active: icon.active,
      }
    })
    setIcons(newIcons)
  }

  function setNewCurrentApp(appId: number) {
    const newCurrentApp = apps.find((app) => app.id === appId) || apps[0]

    setCurrentApp(newCurrentApp)
    handleActiveIcon(newCurrentApp.label)
  }

  return (
    <CurrentAppContext.Provider
      value={{
        currentApp,
        apps,
        setNewCurrentApp,
      }}
    >
      {children}
    </CurrentAppContext.Provider>
  )
}
