import { AiFillApple } from 'react-icons/ai'
import { CustomControlButton, CustomControlContainer } from './styles'

export function CustomControls() {
  return (
    <CustomControlContainer>
      <CustomControlButton>
        <AiFillApple size={24} />
      </CustomControlButton>
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
