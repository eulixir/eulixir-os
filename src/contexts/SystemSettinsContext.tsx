import { createContext, ReactNode, useState } from 'react'
import { SystemSettignsItemOption } from '../@types/systemSettings'
import { systemSettingsItemsOptions } from '../apps/systemSettings'
import { updateConfig } from '../services/globalConfigs/updateConfig'
import { getGlobalConfigs } from '../services/globalConfigs/getGlobalConfigs'

interface SystemSettingsContextProviderProps {
  children: ReactNode
}

interface SystemSettingsContextProviderType {
  wifiState: boolean
  toggleWifi: (action: boolean) => void
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

  const { systemSettingsConfig } = getGlobalConfigs()

  const [wifiState, setWifiState] = useState(systemSettingsConfig.wifiStatus)

  function toggleWifi(action: boolean) {
    setWifiState(action)
    updateConfig({ systemSettingsConfig: { wifiStatus: action } })
  }

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
      value={{ setNewCurrentAppView, currentAppView, wifiState, toggleWifi }}
    >
      {children}
    </SystemSettingsContext.Provider>
  )
}
