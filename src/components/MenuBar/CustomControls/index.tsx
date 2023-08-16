import { AiFillApple } from 'react-icons/ai'
import {
  CustomControlButton,
  CustomControlContainer,
  MacOsIconButton,
} from './styles'

export function CustomControls() {
  const buttons = ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help']

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
