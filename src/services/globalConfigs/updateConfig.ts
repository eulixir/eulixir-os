import { getGlobalConfigs } from './getGlobalConfigs'
import { GlobalConfigs } from './setup'

// eslint-disable-next-line prettier/prettier
interface UpdateConfigProps extends Partial<GlobalConfigs> { }

export function updateConfig(newConfigs: UpdateConfigProps) {
  const oldConfigs = getGlobalConfigs()

  const mergedConfigs = { ...oldConfigs, ...newConfigs }

  localStorage.setItem('globalConfigs', JSON.stringify(mergedConfigs))
}
