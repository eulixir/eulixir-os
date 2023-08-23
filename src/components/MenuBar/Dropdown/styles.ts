import styled, { css } from 'styled-components'

import * as Menubar from '@radix-ui/react-menubar'

export const buttonBaseStyles = css`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.font};
  outline: none;

  border-radius: 4px;
`

export const MenuBarButtonBase = styled.button`
  ${buttonBaseStyles}
`

export const CustomControlButton = styled(Menubar.Trigger)`
  ${buttonBaseStyles}

  &[data-state='true'], &[aria-expanded='true'] {
    background: ${({ theme }) => theme.colors.buttonFocus};
    box-shadow: 5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -webkit-box-shadow: 5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -moz-box-shadow: 5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};
  }
`
