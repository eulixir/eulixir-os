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
