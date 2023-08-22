import { createContext, ReactNode, useEffect, useState } from 'react'

interface CurrentAppContextProviderProps {
  children: ReactNode
}

interface Icon {
  url: string
  label: string
  active: boolean
  appName: string
}

interface CurrentAppType {
  buttons: string[]
  icons: Icon[]
  setNewAppTitle: (appTitle: string) => void
  handleActiveIcon: (label: string) => void
}

export const CurrentAppContext = createContext({} as CurrentAppType)

export function CurrentAppContextProvider({
  children,
}: CurrentAppContextProviderProps) {
  const [appTitle, setAppTitle] = useState('Finder')
  const [buttons, setButtons] = useState([
    'Finder',
    'File',
    'Edit',
    'View',
    'Go',
    'Window',
    'Help',
  ])

  const [icons, setIcons] = useState([
    {
      url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png',
      label: 'Finder',
      active: true,
      appName: 'Finder',
    },
    {
      url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png',
      label: 'Safari',
      active: false,
      appName: 'Safari',
    },
    {
      url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853270b5e2ccfd795b49_appstore.png',
      label: 'App Store',
      active: false,
      appName: 'App Store',
    },
    {
      url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c55558a2e1192ee09_photos.png',
      label: 'Photos',
      active: false,
      appName: 'Photos',
    },
    {
      url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708540dd82638d7b8eda70_tv.png',
      label: 'Apple TV',
      active: false,
      appName: 'Apple TV',
    },
    {
      url: 'https://findicons.com/files/icons/569/longhorn_objects/128/trash.png',
      active: false,
      label: 'Trash',
      appName: 'Finder',
    },
  ])

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

  useEffect(() => {
    setButtons([appTitle, 'File', 'Edit', 'View', 'Go', 'Window', 'Help'])
  }, [appTitle])

  function setNewAppTitle(newAppTitle: string) {
    setAppTitle(newAppTitle)
  }

  return (
    <CurrentAppContext.Provider
      value={{
        setNewAppTitle,
        buttons,
        handleActiveIcon,
        icons,
      }}
    >
      {children}
    </CurrentAppContext.Provider>
  )
}
