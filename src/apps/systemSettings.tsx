import { App, ItemDropdown } from '../@types/app'
import { SystemSettignsItemOption } from '../@types/systemSettings'
import { SystemSettingsContextProvider } from '../contexts/SystemSettinsContext'
import { OwnerView } from '../pages/app/desktop/SystemSettings/Views/AboutOwner'

const systemSettingsDropDownItems = (): ItemDropdown[] => {
  const items = [
    {
      name: 'System Settings',
      items: [
        {
          name: 'About System Settings',
          handleButtonFunction: () => console.log('About This Mac'),
        },
        {
          name: 'Services',
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
          hasShortcut: false,
          hasDropMenu: true,
        },
        {
          name: 'Hide System Settings',
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
          hasShortcut: true,
          shortcut: '⌘ H',
        },
        {
          name: 'Hide Others',
          handleButtonFunction: () => console.log('About This Mac'),
          hasShortcut: true,
          shortcut: '⌥ ⌘ H',
        },
        {
          name: 'Show All',
          handleButtonFunction: () => console.log('About This Mac'),
          enabled: true,
        },
        {
          name: 'Quit System Settings',
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
          hasShortcut: true,
          shortcut: '⌘ Q',
          enabled: true,
        },
      ],
    },
    {
      name: 'File',
      items: [
        {
          name: 'Close',
          handleButtonFunction: () => console.log('About This Mac'),
          hasShortcut: true,
          shortcut: '⌘ W',
        },
      ],
    },
    {
      name: 'View',
      items: [
        {
          name: 'Close',
          handleButtonFunction: () => console.log('About This Mac'),
          hasShortcut: true,
          shortcut: '⌘ W',
        },
      ],
    },
  ]

  return items
}

export const systemSettings: App = {
  id: 4,
  dropdownItems: systemSettingsDropDownItems(),
  url: 'https://cdn.jim-nielsen.com/macos/1024/system-preferences-2021-06-03.png',
  label: 'System Settings',
  active: true,
  appName: 'System Settings',
  context: SystemSettingsContextProvider,
}

export const systemSettingsItemsOptions: SystemSettignsItemOption[] = [
  {
    id: 1,
    name: 'Apple ID',
    view: OwnerView,
  },
  {
    id: 2,
    name: 'Wi-Fi',
    iconPath:
      'https://cdn.jim-nielsen.com/macos/1024/system-preferences-2021-06-03.png',
    view: OwnerView,
  },
  {
    id: 3,
    name: 'Bluetooth',
    iconPath:
      'https://cdn.jim-nielsen.com/macos/1024/system-preferences-2021-06-03.png',
    view: OwnerView,
  },
]
