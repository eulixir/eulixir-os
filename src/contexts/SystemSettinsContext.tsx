import { createContext, ReactNode, useState } from 'react'
import { SystemSettignsOption } from '../@types/systemSettings'
import { systemSettingsOptions } from '../apps/systemSettings'
import { SystemSettingsApp } from '../pages/app/desktop/SystemSettings'

interface SystemSettingsContextProviderProps {
  children: ReactNode
}

interface SystemSettingsContextProviderType {
  setNewCurrentAppView: (viewId: number) => void
  currentAppView: SystemSettignsOption
}

export const SystemSettingsContext = createContext(
  {} as SystemSettingsContextProviderType,
)

export function SystemSettingsContextProvider({
  children,
}: SystemSettingsContextProviderProps) {
  const [currentAppView, setCurrentAppView] = useState<SystemSettignsOption>(
    systemSettingsOptions[1],
  )

  function setNewCurrentAppView(viewId: number) {
    const index = systemSettingsOptions.findIndex(({ id }) => viewId === id)

    if (currentAppView.id === viewId) {
      return
    }

    setCurrentAppView(systemSettingsOptions[index])
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
