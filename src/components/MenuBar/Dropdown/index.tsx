import { Item } from '../../../@types/item'
import * as S from './styles'
import * as Menubar from '@radix-ui/react-menubar'


interface DropdownProps {
  items: Item[]
  trigger: string
}

export function Dropdown({ items, trigger }: DropdownProps) {
  return (
    <Menubar.Menu>
      <S.CustomControlButton>{trigger}</S.CustomControlButton>

      <Menubar.Portal>
        <S.DropdownArea>
          {items.map((item, index) => (
            <>
            {item.hasSection && <S.Section />}
            <S.MenubarItem key={index}>
              <span>
                {item.name}
                {item.hasShortcut && (
                  <p className="shortcut">{item.shortcut}</p>
                )}
              </span>
            </S.MenubarItem>
          </>
          ))}
        </S.DropdownArea>
      </Menubar.Portal>
    </Menubar.Menu>
  )
}
