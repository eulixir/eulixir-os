import { useContext } from 'react'
import { AiFillApple } from 'react-icons/ai'
import { CurrentAppContext } from '../../../contexts/currentApp'
import {
  CustomControlButton,
  CustomControlContainer,
  MacOsIconButton,
} from './styles'
import { useState } from 'react'

export function CustomControls() {
  const { buttons } = useContext(CurrentAppContext)
  const [oppenedDropdown, setOppenedDropdown] = useState(false)

  return (
    <CustomControlContainer
      onClick={() => setOppenedDropdown(true)}
      onMouseLeave={() => setOppenedDropdown(false)}
    >
      <MacOsIconButton oppened={oppenedDropdown}>
        <AiFillApple size={22} />
      </MacOsIconButton>
      <div>
        {buttons.map((button) => (
          <CustomControlButton key={button} oppened={oppenedDropdown}>
            {button}
          </CustomControlButton>
        ))}
      </div>
    </CustomControlContainer>
  )
}
