import { getGlobalConfigs } from '../getGlobalConfigs'

export function getOsTheme() {
  const localTheme = getGlobalConfigs().theme

  if (localTheme) {
    return localTheme
  }

  const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

  return osTheme
}
