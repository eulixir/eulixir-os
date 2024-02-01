import { getGlobalConfigs } from './getGlobalConfigs'
import { getOsTheme } from './theme/getOsTheme'

interface SystemSettingsConfig {
  wifiStatus: boolean
}

export interface GlobalConfigs {
  theme: string
  systemSettingsConfig: SystemSettingsConfig
}

export function setupConfigService() {
  const oldConfigs = getGlobalConfigs()

  if (!oldConfigs) {
    return
  }

  const baseConfigs: GlobalConfigs = {
    theme: getOsTheme(),
    systemSettingsConfig: { wifiStatus: true },
  }

  localStorage.setItem('globalConfigs', JSON.stringify(baseConfigs))
}
