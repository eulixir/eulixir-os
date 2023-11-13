import { Item } from './item'

export interface ItemDropdown {
  name: string
  items: Item[]
}

export interface App {
  id: number
  dropdownItems: ItemDropdown[]
  url: string
  label: string
  active: boolean
  appName: string
}
