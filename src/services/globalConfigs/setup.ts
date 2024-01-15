import { getOsTheme } from './theme/getOsTheme'

interface SystemSettingsConfig {
  activeWifi: boolean
}

export interface GlobalConfigs {
  theme: string
  systemSettingsConfig: SystemSettingsConfig
}

export function setupConfigService() {
  const baseConfigs: GlobalConfigs = {
    theme: getOsTheme(),
    systemSettingsConfig: { activeWifi: true },
  }

  localStorage.setItem('globalConfigs', JSON.stringify(baseConfigs))
}
