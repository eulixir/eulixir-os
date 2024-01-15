import { GlobalConfigs } from './setup'

export function getGlobalConfigs() {
  const configs: GlobalConfigs = JSON.parse(
    localStorage.getItem('globalConfigs') ?? '{}',
  )

  return configs
}
