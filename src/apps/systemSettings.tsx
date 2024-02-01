import { App, ItemDropdown } from '../@types/app'
import { SystemSettignsItemOption } from '../@types/systemSettings'
import { SystemSettingsApp } from '../pages/desktop/SystemSettings'

import WiFiIcon from '../assets/icons/Wifi-icon.png'
import BluetoothIcon from '../assets/icons/Bluetooth icon.png'
import NetworkIcon from '../assets/icons/Network-icon.png'
import NotificationsIcon from '../assets/icons/Notification-icon.png'
import SoundIcon from '../assets/icons/Sound-icon.png'
import FocusIcon from '../assets/icons/Focus-icon.png'
import AccessibilityIcon from '../assets/icons/Acessibility-icon.png'
import ControlCenter from '../assets/icons/Control-center-icon.png'
import PrivacyAndSecurityIcon from '../assets/icons/Privacy-and-Security-icon.png'
import GeneralIcon from '../assets/icons/General-icon.png'
import AppearanceIcon from '../assets/icons/Appearance-icon.png'

import { AppearanceView } from '../pages/desktop/SystemSettings/Views/Appearance'
import { OwnerView } from '../pages/desktop/SystemSettings/Views/AboutOwner'
import { WiFiView } from '../pages/desktop/SystemSettings/Views/WiFi'

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
  context: SystemSettingsApp,
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
    view: WiFiView,
    visible: true,
  },
  {
    viewId: 3,
    name: 'Bluetooth',
    iconPath: BluetoothIcon,
    view: OwnerView,
    visible: true,
  },
  {
    viewId: 4,
    name: 'Network',
    iconPath: NetworkIcon,
    view: OwnerView,
    visible: true,
  },
  {
    viewId: 5,
    name: 'Notifications',
    iconPath: NotificationsIcon,
    view: OwnerView,
    visible: true,
  },
  {
    viewId: 6,
    name: 'Sound',
    iconPath: SoundIcon,
    view: OwnerView,
    visible: true,
  },
  {
    viewId: 7,
    name: 'Focus',
    iconPath: FocusIcon,
    view: OwnerView,
    visible: true,
  },
  {
    viewId: 8,
    name: 'General',
    iconPath: GeneralIcon,
    view: OwnerView,
    visible: true,
  },
  {
    viewId: 9,
    name: 'Apperance',
    iconPath: AppearanceIcon,
    view: AppearanceView,
    visible: true,
  },
  {
    viewId: 10,
    name: 'Accessibility',
    iconPath: AccessibilityIcon,
    view: OwnerView,
    visible: true,
  },
  {
    viewId: 11,
    name: 'Control Center',
    iconPath: ControlCenter,
    view: OwnerView,
    visible: true,
  },
  {
    viewId: 12,
    name: 'Privacy & Security',
    iconPath: PrivacyAndSecurityIcon,
    view: OwnerView,
    visible: true,
  },
]
