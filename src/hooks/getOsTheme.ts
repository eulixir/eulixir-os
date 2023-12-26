export function getOsTheme() {
  const localTheme = localStorage.getItem('os-theme')

  if (localTheme) {
    return localTheme
  }

  const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

  return osTheme
}
