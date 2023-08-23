import styled from 'styled-components'
import * as Menubar from '@radix-ui/react-menubar'
import { buttonBaseStyles } from '../Dropdown/styles'

export const MacOsIconButton = styled(Menubar.Trigger)`
  ${buttonBaseStyles}

  &[data-state='true'], &[aria-expanded='true'] {
    background: ${({ theme }) => theme.colors.buttonFocus};
    box-shadow: 7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -webkit-box-shadow: 7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -moz-box-shadow: 7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};
  }
`
