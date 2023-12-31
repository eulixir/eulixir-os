import { css } from 'styled-components'

export const buttonBaseStyles = css`
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.font};
  outline: none;

  border-radius: 4px;

  &[data-state='true'],
  &[aria-expanded='true'] {
    background: ${({ theme }) => theme.colors.buttonFocus};
    box-shadow:
      5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -webkit-box-shadow:
      5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -moz-box-shadow:
      5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};
  }
`
