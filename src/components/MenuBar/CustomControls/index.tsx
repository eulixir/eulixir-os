import { useContext } from 'react'
import { AiFillApple } from 'react-icons/ai'
import { CurrentAppContext } from '../../../contexts/currentApp'
import {
  CustomControlButton,
  CustomControlContainer,
  MacOsIconButton,
} from './styles'

export function CustomControls() {
  const { buttons } = useContext(CurrentAppContext)

  return (
    <CustomControlContainer>
      <MacOsIconButton>
        <AiFillApple size={22} />
      </MacOsIconButton>
      <div>
        {buttons.map((button) => (
          <CustomControlButton key={button}>{button}</CustomControlButton>
        ))}
      </div>
    </CustomControlContainer>
  )
}
