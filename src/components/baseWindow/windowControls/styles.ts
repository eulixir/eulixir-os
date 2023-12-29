import styled from 'styled-components'

export const WindowControlsContainer = styled.div`
  z-index: 40;
  position: absolute;

  left: 14px;
  top: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  height: 20px;
  width: 52px;

  & > button > svg {
    color: transparent;
    transition: 0.2s;
  }

  &:hover > button > svg {
    color: black;
  }
`

interface WindowButton {
  active: string
}

const WindowButton = styled.button<WindowButton>`
  width: 12px;
  height: 12px;

  border-radius: 50%;
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Close = styled(WindowButton)`
  &:hover {
    transition: 0.3s;
  }
  background: ${({ theme, active }) =>
    active === 'true'
      ? theme.windowControls.closeButton
      : theme.windowControls.inactiveColor};
`

export const Minimize = styled(WindowButton)`
  &:hover {
    transition: 0.3s;
  }
  background: ${({ theme, active }) =>
    active === 'true'
      ? theme.windowControls.minimizeButton
      : theme.windowControls.inactiveColor};
`

export const Maximize = styled(WindowButton)`
  &:hover {
    transition: 0.3s;
  }
  background: ${({ theme, active }) =>
    active === 'true'
      ? theme.windowControls.maximizeButton
      : theme.windowControls.inactiveColor};
`
