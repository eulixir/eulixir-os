import { App, ItemDropdown } from '../@types/app'
import { SystemSettignsItemOption } from '../@types/systemSettings'
import { SystemSettingsContextProvider } from '../contexts/SystemSettinsContext'
import { OwnerView } from '../pages/desktop/SystemSettings/Views/AboutOwner'
import WiFiIcon from '../assets/icons/wi-fi-icon.png'
import Bluetooth from '../assets/icons/Bluetooth icon.png'
import { WiFiOption } from '../pages/desktop/SystemSettings/Sidebar/Option/WiFi'

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
    viewId: 1,
    name: 'Apple ID',
    view: OwnerView,
    visible: false,
  },
  {
    viewId: 2,
    name: 'Wi-Fi',
    iconPath: WiFiIcon,
    view: WiFiOption,
    visible: true,
  },
  {
    viewId: 3,
    name: 'Bluetooth',
    iconPath: Bluetooth,
    view: OwnerView,
    visible: true,
  },
]
