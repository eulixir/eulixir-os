import { useContext } from 'react'
import { AiFillApple } from 'react-icons/ai'
import { CurrentAppContext } from '../../../contexts/currentAppContext'
import {
  CustomControlButton,
  CustomControlContainer,
  MacOsIconButton,
} from './styles'
import { useState } from 'react'
import { Dropdown } from '../Dropdown'

export function CustomControls() {
  const { buttons } = useContext(CurrentAppContext)
  const [openedDropdown, setopenedDropdown] = useState(false)

  return (
    <CustomControlContainer
      onClick={() => setopenedDropdown(true)}
      onMouseLeave={() => setopenedDropdown(false)}
    >
      <MacOsIconButton opened={openedDropdown}>
        <AiFillApple size={22} />
      </MacOsIconButton>
      <div>
        {buttons.map((button, length) => (
          <CustomControlButton key={length} opened={openedDropdown}>
            {button.name}
            {openedDropdown && <Dropdown items={button.items} />}
          </CustomControlButton>
        ))}
      </div>
    </CustomControlContainer>
  )
}
