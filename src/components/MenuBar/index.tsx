import { Container } from './styles'
import { MenuBarIcons } from './MenuBarIcons'
import { CustomControls } from './CustomControls'
import { Notch } from './Notch'

interface MenuBarProps {
  changeOsTheme: () => void
}

export function MenuBar({ changeOsTheme }: MenuBarProps) {
  return (
    <Container>
      <CustomControls />
      <MenuBarIcons changeOsTheme={changeOsTheme} />
      <Notch />
    </Container>
  )
}
