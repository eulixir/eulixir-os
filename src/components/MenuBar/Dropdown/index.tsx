import { DropdownContainer } from './styles'

interface DropdownProps {
  items: string[]
}
export function Dropdown({ items }: DropdownProps) {
  return (
    <>
      {items.map((item, length) => (
        <DropdownContainer key={length}>{item}</DropdownContainer>
      ))}
    </>
  )
}
