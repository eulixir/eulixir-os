import { SystemHour } from '../SystemHour'
import {
  IoIosWifi,
  IoIosBatteryCharging,
  IoIosSwitch,
  IoIosSearch,
  IoIosMoon,
} from 'react-icons/io'
import { Container, MenuBarButton } from './styles'

interface MenuBarIconsProps {
  changeOsTheme: () => void
}

export function MenuBarIcons({ changeOsTheme }: MenuBarIconsProps) {
  return (
    <Container onClick={() => handleUpdateDropdown(false)}>
      <main>
        <MenuBarButton>
          <IoIosMoon size={19} />
        </MenuBarButton>
        <MenuBarButton>
          <IoIosBatteryCharging size={24} />
        </MenuBarButton>

        <MenuBarButton>
          <IoIosWifi size={19} />
        </MenuBarButton>

        <MenuBarButton>
          <IoIosSearch size={19} />
        </MenuBarButton>

        <MenuBarButton>
          <IoIosSwitch size={17} />
        </MenuBarButton>

        <SystemHour />
      </main>
    </Container>
  )
}
