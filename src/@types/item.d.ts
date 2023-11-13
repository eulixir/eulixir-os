export interface Item {
  name: string
  handleButtonFunction?: () => void
  hasSection?: boolean
  shortcut?: string
  hasShortcut?: boolean
  hasDropMenu?: boolean
  enabled?: boolean
}
