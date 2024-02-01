import { SystemHour } from '../SystemHour'
import {
  IoIosBatteryCharging,
  IoIosSwitch,
  IoIosSearch,
  IoIosMoon,
} from 'react-icons/io'
import { Container, MenuBarButton } from './styles'
import { useContext, useEffect, useState } from 'react'
import { SystemSettingsContext } from '../../../contexts/SystemSettinsContext'
import { CiWifiOff } from 'react-icons/ci'
import { BiWifi } from 'react-icons/bi'

interface MenuBarIconsProps {
  changeOsTheme: () => void
}

export function MenuBarIcons({ changeOsTheme }: MenuBarIconsProps) {
  const { wifiState, toggleWifi } = useContext(SystemSettingsContext)

  const [wifiIconState, setWifiIconState] = useState(wifiState)

  useEffect(() => {
    setWifiIconState(wifiState)
  }, [wifiState, wifiIconState])

  return (
    <Container>
      <main>
        <MenuBarButton>
          <IoIosMoon size={19} onClick={changeOsTheme} />
        </MenuBarButton>
        <MenuBarButton>
          <IoIosBatteryCharging size={24} />
        </MenuBarButton>

        <MenuBarButton>
          {wifiIconState ? (
            <BiWifi size={19} onClick={() => toggleWifi(false)} />
          ) : (
            <CiWifiOff size={19} onClick={() => toggleWifi(true)} />
          )}
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
