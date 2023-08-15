import { Container } from './styles'
import { MenuBarIcons } from './MenuBarIcons'
import { CustomControls } from './CustomControls'

export function MenuBar() {
  return (
    <Container>
      <CustomControls />
      <MenuBarIcons />
    </Container>
  )
}
