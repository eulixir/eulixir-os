import * as S from './styles'
import * as Menubar from '@radix-ui/react-menubar'

interface DropdownProps {
  items: string[]
  trigger: string
}

export function Dropdown({ items, trigger }: DropdownProps) {
  return (
    <Menubar.Menu>
      <S.CustomControlButton>{trigger}</S.CustomControlButton>

      <Menubar.Portal>
        <Menubar.Content>
          {items.map((item, length) => (
            <Menubar.Item key={length}>{item}</Menubar.Item>
          ))}
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  )
}
