import styled from 'styled-components'
import { MenuBarButtonBase } from '../CustomControls/styles'

export const SystemHourButton = styled(MenuBarButtonBase)`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.colors.font};
  font-size: 0.88rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:active {
    background: ${({ theme }) => theme.colors.buttonFocus};
    box-shadow: 9px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -9px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -webkit-box-shadow: 9px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -9px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -moz-box-shadow: 9px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -9px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};
  }
`
