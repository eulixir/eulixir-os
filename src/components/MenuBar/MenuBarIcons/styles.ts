import styled from 'styled-components'
import { MenuBarButtonBase } from '../CustomControls/styles'

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
      margin: 0 0.3rem;
    }
  }
`

export const MenuBarButton = styled(MenuBarButtonBase)`
  &:active {
    background: ${({ theme }) => theme.colors.buttonFocus};
    box-shadow: 7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};,
      -7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};;

    -webkit-box-shadow: 7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};,
      -7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};;

    -moz-box-shadow: 7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};,
      -7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};;
  }
`
