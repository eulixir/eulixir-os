import { createContext, ReactNode, useState } from 'react'

interface AppWindowContextProviderProps {
  children: ReactNode
}

interface AppWindowContextProviderType {
  addNewAppToStack: (id: number) => void
  getZIndex: (id: number) => number
  appStack: number[]
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

    const zIndex = (appStack.length + index) * 10

    return zIndex
  }

  return (
    <AppWindowContext.Provider
      value={{ addNewAppToStack, getZIndex, appStack }}
    >
      {children}
    </AppWindowContext.Provider>
  )
}
