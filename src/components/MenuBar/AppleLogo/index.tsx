import { AiFillApple } from 'react-icons/ai'
import { MacOsIconButton } from './styles'
import * as Menubar from '@radix-ui/react-menubar'

export function AppleLogo() {
  const items = [
    'Back',
    'Forward',
    'Enclosing Folder',
    'Recents',
    'Documents',
    'Desktop',
    'Downloads',
    'Home',
    'Computer',
    'AirDrop',
    'Network',
    'iCloud Drive',
    'Shared',
    'Applications',
    'Utilities',
    'Recents Folders',
    'Go to Folder...',
    'Connect to Server...',
  ]

  return (
    <Menubar.Menu>
      <MacOsIconButton>
        <AiFillApple size={22} />

        <Menubar.Portal>
          <Menubar.Content>
            {items.map((item, index) => (
              <Menubar.Item key={index}>{item}</Menubar.Item>
            ))}
          </Menubar.Content>
        </Menubar.Portal>
      </MacOsIconButton>
    </Menubar.Menu>
  )
}
