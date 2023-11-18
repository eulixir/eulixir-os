import { createContext, ReactNode, useState } from 'react'
// import { apps } from '../apps/appService'

interface AppWindowContextProviderProps {
  children: ReactNode
}

interface AppWindowContextProviderType {
  addNewAppToStack: (id: number) => void
}

export const AppWindowContext = createContext(
  {} as AppWindowContextProviderType,
)

export function AppWindowContextProvider({
  children,
}: AppWindowContextProviderProps) {
  const [appStack, setAppStack] = useState<number[]>([])

  function addNewAppToStack(id: number) {
    if (appStack.length === 0) {
      return setAppStack([id])
    }

    if (appStack[appStack.length - 1] === id) {
      return
    }

    const updatedApps = appStack.filter((appId) => appId !== id)

    setAppStack([...updatedApps, id])
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
    <AppWindowContext.Provider value={{ addNewAppToStack }}>
      {children}
    </AppWindowContext.Provider>
  )
}
