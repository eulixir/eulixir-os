import { createContext, ReactNode, useState } from 'react'
import { SystemSettignsItemOption } from '../@types/systemSettings'
import { systemSettingsItemsOptions } from '../apps/systemSettings'
import { SystemSettingsApp } from '../pages/app/desktop/SystemSettings'

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
      ({ id }) => viewId === id,
    )

    if (currentAppView.id === viewId) {
      return
    }

    setCurrentAppView(systemSettingsItemsOptions[index])
  }

  return (
    <SystemSettingsContext.Provider
      value={{ setNewCurrentAppView, currentAppView }}
    >
      <SystemSettingsApp />
      {children}
    </SystemSettingsContext.Provider>
  )
}
