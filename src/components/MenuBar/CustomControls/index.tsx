import { AiFillApple } from 'react-icons/ai'
import {
  CustomControlButton,
  CustomControlContainer,
  MacOsIconButton,
} from './styles'

export function CustomControls() {
  return (
    <CustomControlContainer>
      <MacOsIconButton>
        <AiFillApple size={24} />
      </MacOsIconButton>
      <div>
        <CustomControlButton>Display</CustomControlButton>
        <CustomControlButton>File</CustomControlButton>
        <CustomControlButton>Edit</CustomControlButton>
        <CustomControlButton>View</CustomControlButton>
        <CustomControlButton>Window</CustomControlButton>
        <CustomControlButton>Help</CustomControlButton>
      </div>
    </CustomControlContainer>
  )
}
