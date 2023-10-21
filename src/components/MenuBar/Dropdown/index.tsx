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
        <S.DropdownArea>
          {items.map((item, length) => (
            <Menubar.Item key={length}>{item}</Menubar.Item>
          ))}
        </S.DropdownArea>
      </Menubar.Portal>
    </Menubar.Menu>
  )
}
