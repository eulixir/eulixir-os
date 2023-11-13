import { AiFillApple } from 'react-icons/ai'
import { DropdownArea, MacOsIconButton, MenubarItem } from './styles'
import * as Menubar from '@radix-ui/react-menubar'
import { Section } from '../Dropdown/styles'
import { Fragment } from 'react'

export function AppleLogo() {
  const items = [
    {
      name: 'About This Mac',
      handleButtonFunction: () => console.log('About This Mac'),
    },
    {
      name: 'System Settings...',
      hasSection: true,
      handleButtonFunction: () => console.log('System Settings...'),
    },
    {
      name: 'App Store',
      handleButtonFunction: () => console.log('App Store'),
    },
    {
      name: 'Recent Items',
      handleButtonFunction: () => console.log('Recent Items'),
      hasDropMenu: true,
      MenuItems: [
        'Applications',
        'Documents',
        'Servers',
        'Items Removed Today',
      ],
      hasSection: true,
    },
    {
      name: 'Force Quit...',
      handleButtonFunction: () => console.log('Force Quit...'),
      hasSection: true,
      hasShortcut: true,
      shortcut: '⌥ ⌘ Esc',
    },
    {
      name: 'Sleep',
      handleButtonFunction: () => console.log('Sleep'),
    },
    {
      name: 'Restart...',
      handleButtonFunction: () => console.log('Restart...'),
    },
    {
      name: 'Shut Down...',
      handleButtonFunction: () => console.log('Shut Down...'),
    },
    {
      name: 'Lock Screen',
      handleButtonFunction: () => console.log('Lock Screen'),
      hasSection: true,
      hasShortcut: true,
      shortcut: '^ ⌘ Q',
    },
    {
      name: 'Log Out...',
      handleButtonFunction: () => console.log('Log Out...'),
      hasShortcut: true,
      shortcut: '⇧ ⌘ Q',
    },
  ]

  return (
    <Menubar.Menu>
      <MacOsIconButton>
        <AiFillApple size={22} />

        <Menubar.Portal>
          <DropdownArea>
            {items.map((item) => (
              <Fragment key={item.name}>
                {item.hasSection && <Section key={item.name} />}
                <MenubarItem key={item.name}>
                  <span>
                    {item.name}
                    {item.hasShortcut && (
                      <p className="shortcut">{item.shortcut}</p>
                    )}
                  </span>
                </MenubarItem>
              </Fragment>
            ))}
          </DropdownArea>
        </Menubar.Portal>
      </MacOsIconButton>
    </Menubar.Menu>
  )
}
