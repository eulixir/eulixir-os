import { Container } from './styles'
import { MenuBarIcons } from './MenuBarIcons'
import { CustomControls } from './CustomControls'

interface MenuBarProps {
  changeOsTheme: () => void
}

export function MenuBar({ changeOsTheme }: MenuBarProps) {
  return (
    <Container>
      <CustomControls />
      <MenuBarIcons changeOsTheme={changeOsTheme} />
    </Container>
  )
}
