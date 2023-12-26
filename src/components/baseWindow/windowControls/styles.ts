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
`

const WindowButton = styled.button`
  width: 12px;
  height: 12px;
  flex-shrink: 0;

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
  background: ${({ theme }) => theme.windowControls.closeButton};
`

export const Minimize = styled(WindowButton)`
  &:hover {
    transition: 0.3s;
  }
  background: ${({ theme }) => theme.windowControls.minimizeButton};
`

export const Maximize = styled(WindowButton)`
  &:hover {
    transition: 0.3s;
  }
  background: ${({ theme }) => theme.windowControls.maximizeButton};
`
