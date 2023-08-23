import styled from 'styled-components'
import { MenuBarButtonBase } from '../Dropdown/styles'

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding-right: 1rem;

  & > main {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & > * {
      margin: 0 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`

export const MenuBarButton = styled(MenuBarButtonBase)`
  &:active {
    background: ${({ theme }) => theme.colors.buttonFocus};
    box-shadow: 10px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -10px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -webkit-box-shadow: 10px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -10px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -moz-box-shadow: 10px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -10px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};
  }
`
