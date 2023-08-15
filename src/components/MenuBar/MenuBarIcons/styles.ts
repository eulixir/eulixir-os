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

  & > * {
    color: var(--gray-light-100);
  }
`

export const MenuBarButton = styled(MenuBarButtonBase)`
  padding: 0 0.4rem;

  &:focus {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 5px 0 0 0 rgba(255, 255, 255, 0.2),
      -5px 0 0 0 rgba(255, 255, 255, 0.2);

    -webkit-box-shadow: 5px 0 0 0 rgba(255, 255, 255, 0.2),
      -5px 0 0 0 rgba(255, 255, 255, 0.2);

    -moz-box-shadow: 5px 0 0 0 rgba(255, 255, 255, 0.2),
      -5px 0 0 0 rgba(255, 255, 255, 0.2);
  }
`
