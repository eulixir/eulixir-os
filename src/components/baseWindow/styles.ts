import { motion } from 'framer-motion'
import styled from 'styled-components'

export const AppContainer = styled(motion.div)`
  position: absolute;

  border: 0.01px solid ${({ theme }) => theme.colors.menubar.disabled};

  -webkit-box-shadow: inset 0px 0px 0px 1px
    ${({ theme }) => theme.splash.background};
  -moz-box-shadow: inset 0px 0px 0px 1px
    ${({ theme }) => theme.splash.background};
  box-shadow: inset 0px 0px 0px 1px ${({ theme }) => theme.splash.background};
  border-radius: 8px;
  overflow: hidden;
`

interface ControlContainerProps {
  $windowControlsFullSize: string
}

export const ControlContainer = styled.div<ControlContainerProps>`
  background-color: ${({ theme, $windowControlsFullSize }) =>
    $windowControlsFullSize === 'true'
      ? 'transparent'
      : theme.colors.dock.border};

  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  & > p {
    color: ${({ theme }) => theme.windowControls.titleColor};
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`

export const TopResizebleBar = styled.div`
  background: red;
  position: absolute;
  width: 100%;
  height: 1px;

  &:hover {
    cursor: col-resize;
  }
`

export const BottomResizebleBar = styled.div`
  background: red;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;

  &:hover {
    cursor: col-resize;
  }
`

export const LeftResizebleBar = styled.div`
  background: red;
  position: absolute;
  width: 1px;
  height: 100%;

  &:hover {
    cursor: col-resize;
  }
`

export const RightResizebleBar = styled.div`
  background: red;
  position: absolute;
  right: 0;
  width: 1px;
  height: 100%;

  &:hover {
    cursor: col-resize;
  }
`
