import { AiFillApple } from 'react-icons/ai'
import { DropdownArea, MacOsIconButton, MenubarItem } from './styles'
import * as Menubar from '@radix-ui/react-menubar'
import { Section } from '../Dropdown/styles'

export function AppleLogo() {
  const items = [
    {
      name: 'About This Mac',
      handleButtonFunction: () => console.log('About This Mac'),
      hasSection: true,
    },
    {
      name: 'System Settings...',
      handleButtonFunction: () => console.log('System Settings...'),
    },
    {
      name: 'App Store',
      handleButtonFunction: () => console.log('App Store'),
      hasSection: true,
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
      hasShortcut: true,
      shortcut: '⌥ ⌘ Esc',
      hasSection: true,
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
      hasSection: true,
    },
    {
      name: 'Lock Screen',
      handleButtonFunction: () => console.log('Lock Screen'),
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
            {items.map((item, index) => (
              <>
                {item.hasSection && <Section />}
                <MenubarItem key={index}>
                  <span>
                    {item.name}
                    {item.hasShortcut && (
                      <p className="shortcut">{item.shortcut}</p>
                    )}
                  </span>
                </MenubarItem>
              </>
            ))}
          </DropdownArea>
        </Menubar.Portal>
      </MacOsIconButton>
    </Menubar.Menu>
  )
}
