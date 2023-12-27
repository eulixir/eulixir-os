import { App, ItemDropdown } from '../@types/app'

import { FinderApp } from '../pages/app/desktop/Finder'

const finderDropDownItems = (): ItemDropdown[] => {
  const items = [
    {
      name: 'Finder',
      items: [
        {
          name: 'About Finder',
          handleButtonFunction: () => console.log('About This Mac'),
        },
        {
          name: 'Settings',
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
          hasShortcut: true,
          shortcut: '⌘ ,',
          hasDropMenu: true,
        },
        {
          name: 'Empty Trash',
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
          hasShortcut: true,
          shortcut: '⌘ ⌫',
        },
        {
          name: 'Services',
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
        },
        {
          name: 'Hide Finder',
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
        },
        {
          name: 'Hide Others',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⌘ H',
        },
        {
          name: 'Show All',
          handleButtonFunction: () => console.log('About This Mac'),
          enabled: false,
        },
      ],
    },
    {
      name: 'File',
      items: [
        {
          name: 'New Finder Window',
          handleButtonFunction: () => console.log('About This Mac'),
          enabled: true,
          hasShortcut: true,
          shortcut: '⌘ N',
        },
        {
          name: 'New Folder with Selection',
          handleButtonFunction: () => console.log('About This Mac'),
          hasShortcut: true,
          enabled: false,
          shortcut: '⇧ ⌘ N',
        },
        {
          name: 'New Smart Folder',
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
        },
        {
          name: 'New Tab',
          handleButtonFunction: () => console.log('About This Mac'),
          hasShortcut: true,
          shortcut: '⌘ T',
        },
        {
          name: 'Open',
          handleButtonFunction: () => console.log('About This Mac'),
          enabled: false,
          shortcut: '⌘ O',
        },
        {
          name: 'Open With',
          handleButtonFunction: () => console.log('About This Mac'),
          enabled: false,
          hasDropMenu: true,
        },
        {
          name: 'Close Window',
          handleButtonFunction: () => console.log('About This Mac'),
          enabled: false,
          shortcut: '⌘ W',
          hasSection: true,
        },

        {
          name: 'Get Info',
          handleButtonFunction: () => console.log('About This Mac'),
          hasShortcut: true,
          shortcut: '⌘ I',
        },
        {
          name: 'Rename',
          handleButtonFunction: () => console.log('About This Mac'),
          enabled: false,
        },
        {
          name: 'Compress',
          handleButtonFunction: () => console.log('About This Mac'),
          enabled: false,
        },
        {
          name: 'Duplicate',
          handleButtonFunction: () => console.log('About This Mac'),
          hasShortcut: true,
          enabled: false,
          shortcut: '⌘ D',
        },
        {
          name: 'Make Alias',
          handleButtonFunction: () => console.log('About This Mac'),
          hasShortcut: true,
          enabled: false,
          shortcut: '^ ⌘ A',
        },
        {
          name: 'Quick Lock',
          handleButtonFunction: () => console.log('About This Mac'),
          hasShortcut: true,
          enabled: false,
          shortcut: '⌘ Y',
        },
        {
          name: 'Print',
          handleButtonFunction: () => console.log('About This Mac'),
          hasShortcut: true,
          shortcut: '⌘ P',
          enabled: false,
          hasSection: true,
        },
        {
          name: 'Share...',
          enabled: false,
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
        },
        {
          name: 'Show Original',
          handleButtonFunction: () => console.log('About This Mac'),
          hasShortcut: true,
          enabled: false,
          shortcut: '⌘ R',
        },
        {
          name: 'Add to Sidebar',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '^ ⌘ T',
          enabled: false,
          hasShortcut: true,
        },
        {
          name: 'Move to Trash',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⌘⌫',
          enabled: false,
          hasShortcut: true,
        },
        {
          name: 'Eject',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⌘ E',
          enabled: false,
          hasShortcut: true,
          hasSection: true,
        },
        {
          name: 'Tags...',
          enabled: false,
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
        },
        {
          name: 'Find',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⌘ F',
          hasShortcut: true,
        },
      ],
    },
    {
      name: 'Edit',
      items: [
        {
          name: 'Undo',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⌘ Z',
          enabled: false,
          hasShortcut: true,
        },
        {
          name: 'Redo',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '^ ⌘ Z',
          enabled: false,
          hasShortcut: true,
          hasSection: true,
        },
        {
          name: 'Cut',
          handleButtonFunction: () => console.log('About This Mac'),
          enabled: false,
          shortcut: '⌘ X',
          hasShortcut: true,
        },
        {
          name: 'Copy',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⌘ C',
          enabled: false,
          hasShortcut: true,
        },
        {
          name: 'Paste',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⌘ V',
          enabled: false,
          hasShortcut: true,
        },
        {
          name: 'Select All',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⌘ A',
          enabled: false,
          hasShortcut: true,
          hasSection: true,
        },
        {
          name: 'Show Clipboard',
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
        },
        {
          name: 'AutoFill',
          handleButtonFunction: () => console.log('About This Mac'),
          hasDropMenu: true,
        },
        {
          name: 'Start Dictation',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: 'Mic Icon',
          hasShortcut: true,
        },
        {
          name: 'Emoji & Symbols',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: 'Global Icon E',
          hasShortcut: true,
        },
      ],
    },
    {
      name: 'View',
      items: [
        {
          name: 'as Icons',
          enabled: false,
          hasShortcut: true,
          shortcut: '⌘ 1',
        },
        {
          name: 'as List',
          enabled: false,
          hasShortcut: true,
          shortcut: '⌘ 2',
        },
        {
          name: 'as Columns',
          enabled: false,
          hasShortcut: true,
          shortcut: '⌘ 3',
        },
        {
          name: 'as Gallery',
          enabled: false,
          hasShortcut: true,
          shortcut: '⌘ 4',
        },
        {
          name: 'Use Stacks',
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
          hasShortcut: true,
          shortcut: '^ ⌘ O',
        },
        {
          name: 'Sort By',
          hasDropMenu: true,
        },
        {
          name: 'Clean Up',
          handleButtonFunction: () => console.log('..'),
        },
        {
          name: 'Clean Up By',
          hasDropMenu: true,
        },
        {
          name: 'Hide Tab Bar',
          hasSection: true,
          enabled: false,
          hasShortcut: true,
          shortcut: '⇧ ⌘ T',
        },
        {
          name: 'Show All Tabs',
          enabled: false,
          hasShortcut: true,
          shortcut: '⇧ ⌘ |',
        },
        {
          name: 'Hide SideBar',
          hasSection: true,
          enabled: false,
          hasShortcut: true,
          shortcut: '^ ⌘ S',
        },
        {
          name: 'Hide Preview',
          enabled: false,
          hasShortcut: true,
          shortcut: '⇧ ⌘ P',
        },
        {
          name: 'Hide Tollbar',
          hasSection: true,
          enabled: false,
          hasShortcut: true,
          shortcut: '⌥ ⌘ T',
        },
        {
          name: 'Hide Path Bar',
          enabled: false,
          hasShortcut: true,
          shortcut: '⌥ ⌘ T',
        },
        {
          name: 'Hide Status Bar',
          enabled: false,
          hasShortcut: true,
          shortcut: '⌘ /',
        },
        {
          name: 'Customize Tollbar...',
          hasSection: true,
          enabled: false,
        },
        {
          name: 'Show View Options',
          hasSection: true,
          hasShortcut: true,
          shortcut: '⌘ J',
        },
        {
          name: 'Show Preview Options',
          enabled: false,
        },
        {
          name: 'Entire Fullscreen',
          enabled: false,
          hasShortcut: true,
          shortcut: 'Global F',
        },
      ],
    },
    {
      name: 'Go',
      items: [
        {
          name: 'Back',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⌘ [',
          enabled: false,
          hasShortcut: true,
        },
        {
          name: 'Forward',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⌘ ]',
          enabled: false,
          hasShortcut: true,
        },
        {
          name: 'Enclosing Folder',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⌘ Arrow Up',
          enabled: false,
          hasShortcut: true,
          hasSection: true,
        },
        {
          name: 'Recents',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⇧ ⌘ F',
          hasShortcut: true,
        },
        {
          name: 'Documents',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⇧ ⌘ O',
          hasShortcut: true,
        },
        {
          name: 'Desktop',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⇧ ⌘ D',
          hasShortcut: true,
        },
        {
          name: 'Downloads',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⇧ ⌘ L',
          hasShortcut: true,
        },
        {
          name: 'Home',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⇧ ⌘ H',
          hasShortcut: true,
        },
        {
          name: 'Computer',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⇧ ⌘ C',
          hasShortcut: true,
        },
        {
          name: 'Air Drop',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⇧ ⌘ R',
          hasShortcut: true,
        },
        {
          name: 'Network',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⇧ ⌘ K',
          hasShortcut: true,
        },
        {
          name: 'iCloud Drive',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⇧ ⌘ I',
          hasShortcut: true,
        },
        {
          name: 'Shared',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⇧ ⌘ I',
          hasShortcut: true,
        },
        {
          name: 'Applications',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⇧ ⌘ A',
          hasShortcut: true,
        },
        {
          name: 'Utilities',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⇧ ⌘ U',
          hasShortcut: true,
        },
        {
          name: 'Recent Folders',
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
          hasDropMenu: true,
        },
        {
          name: 'Go to Folder...',
          handleButtonFunction: () => console.log('About This Mac'),
          hasSection: true,
          shortcut: '⇧ ⌘ G',
          hasShortcut: true,
        },
        {
          name: 'Connect to Server',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⌘ K',
          hasShortcut: true,
        },
      ],
    },
    {
      name: 'Window',
      items: [
        {
          name: 'Minimize',
          shortcut: '⌘ M',
          enabled: false,
        },
        {
          name: 'Zoom',
          enabled: false,
        },
        {
          name: 'Move Window to Left Side of Screen',
          enabled: false,
        },
        {
          name: 'Move Window to Right Side of Screen',
          enabled: false,
          hasShortcut: true,
        },
        {
          name: 'Replace Tiled Window',
          enabled: false,
          hasShortcut: true,
        },
        {
          name: 'Remove Window from Set',
          hasSection: true,
          enabled: false,
          hasShortcut: true,
        },
        {
          name: 'Cycle Through Windows',
          enabled: false,
          shortcut: '⌘ `',
          hasShortcut: true,
        },
        {
          name: 'Show Progress Window',
          enabled: false,
        },
        {
          name: 'Show Previous Tab',
          hasSection: true,
          enabled: false,
          shortcut: '^ ⇧ arr right',
          hasShortcut: true,
        },
        {
          name: 'Show Next Tab',
          enabled: false,
          shortcut: '^ arr right',
          hasShortcut: true,
        },
        {
          name: 'Merge All Windows',
          enabled: false,
        },
        {
          name: 'Bring All to Front',
          hasSection: true,
        },
      ],
    },
    {
      name: 'Help',
      items: [
        {
          name: 'Tips for Your Mac',
          handleButtonFunction: () => console.log('About This Mac'),
        },
        {
          name: 'macOS Help',
          handleButtonFunction: () => console.log('About This Mac'),
          shortcut: '⌘ ?',
          hasShortcut: true,
        },
      ],
    },
  ]

  return items
}

export const finder: App = {
  id: 1,
  dropdownItems: finderDropDownItems(),
  url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png',
  label: 'Finder',
  active: true,
  appName: 'Finder',
  component: FinderApp,
}
