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

  //   [
  //   {
  //     url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png',
  //     label: 'Safari',
  //     active: false,
  //     appName: 'Safari',
  //   },
  //   {
  //     url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853270b5e2ccfd795b49_appstore.png',
  //     label: 'App Store',
  //     active: false,
  //     appName: 'App Store',
  //   },
  //   {
  //     url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c55558a2e1192ee09_photos.png',
  //     label: 'Photos',
  //     active: false,
  //     appName: 'Photos',
  //   },
  //   {
  //     url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708540dd82638d7b8eda70_tv.png',
  //     label: 'Apple TV',
  //     active: false,
  //     appName: 'Apple TV',
  //   },
  // ]

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
