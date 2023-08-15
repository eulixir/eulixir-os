import { SystemHour } from '../SystemHour'
import {
  IoIosWifi,
  IoIosBatteryCharging,
  IoIosSwitch,
  IoIosSearch,
  IoIosMoon,
} from 'react-icons/io'
import { Container } from './styles'

export function MenuBarIcons() {
  return (
    <div>
      <Container>
        <main>
          <IoIosMoon size={19} />
          <IoIosBatteryCharging size={19} />
          <IoIosWifi size={19} />
          <IoIosSearch size={19} />
          <IoIosSwitch size={17} />
          <SystemHour />
        </main>
      </Container>
    </div>
  )
}
