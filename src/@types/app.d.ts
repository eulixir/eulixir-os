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
  component: ReactNode
  // page: {
  //   component: () => Jsx
  //   attrs: {
  //     windowControlsFullSize: boolean
  //     appName: string
  //     windowStyle: WindowStyle.FullSized
  //     appId: number
  //   }
  // }
}
