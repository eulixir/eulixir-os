import { createContext, ReactNode, useState } from 'react'
import { SystemSettignsItemOption } from '../@types/systemSettings'
import { systemSettingsItemsOptions } from '../apps/systemSettings'

interface SystemSettingsContextProviderProps {
  children: ReactNode
}

interface SystemSettingsContextProviderType {
  setNewCurrentAppView: (viewId: number) => void
  currentAppView: SystemSettignsItemOption
}

export const SystemSettingsContext = createContext(
  {} as SystemSettingsContextProviderType,
)

export function SystemSettingsContextProvider({
  children,
}: SystemSettingsContextProviderProps) {
  const [currentAppView, setCurrentAppView] =
    useState<SystemSettignsItemOption>(systemSettingsItemsOptions[1])

  function setNewCurrentAppView(viewId: number) {
    const index = systemSettingsItemsOptions.findIndex(
      (view) => view.viewId === viewId,
    )

    if (currentAppView.viewId === viewId) {
      return
    }

    setCurrentAppView(systemSettingsItemsOptions[index])
  }

  return (
    <SystemSettingsContext.Provider
      value={{ setNewCurrentAppView, currentAppView }}
    >
      {children}
    </SystemSettingsContext.Provider>
  )
}
