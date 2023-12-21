import { createContext, ReactNode, useState } from 'react'
// import { apps } from '../apps/appService'

interface AppWindowContextProviderProps {
  children: ReactNode
}

interface AppWindowContextProviderType {
  addNewAppToStack: (id: number) => void
  getZIndex: (id: number) => number
}

export const AppWindowContext = createContext(
  {} as AppWindowContextProviderType,
)

export function AppWindowContextProvider({
  children,
}: AppWindowContextProviderProps) {
  const [appStack, setAppStack] = useState<number[]>([])

  function addNewAppToStack(id: number) {
    const appStackLength = appStack.length

    if (appStackLength === 0) {
      return setAppStack([id])
    }

    if (appStack[appStackLength - 1] === id) {
      return
    }

    const updatedApps = appStack.filter((appId) => appId !== id)

    setAppStack([...updatedApps, id])
  }

  function getZIndex(id: number) {
    const index = appStack.findIndex((appId) => appId === id)

    const zIndex = (appStack.length - index) * 10
    return zIndex
  }

  // [{
  //   name: currentApp.id,
  //   pos: {
  //     x: 2,
  //     y: 3,
  //   }

  // }, 'weather', ....]

  // //

  return (
    <AppWindowContext.Provider value={{ addNewAppToStack, getZIndex }}>
      {children}
    </AppWindowContext.Provider>
  )
}
