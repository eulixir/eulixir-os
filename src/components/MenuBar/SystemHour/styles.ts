import styled from 'styled-components'
import { MenuBarButtonBase } from '../CustomControls/styles'

export const SystemHourButton = styled(MenuBarButtonBase)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  color: var(--gray-light-100);
  color: white;
  font-size: 0.88rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  padding-left: 0.2rem;

  &:active {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 7px 0 0 0 rgba(255, 255, 255, 0.2),
      -7px 0 0 0 rgba(255, 255, 255, 0.2);

    -webkit-box-shadow: 7px 0 0 0 rgba(255, 255, 255, 0.2),
      -7px 0 0 0 rgba(255, 255, 255, 0.2);

    -moz-box-shadow: 7px 0 0 0 rgba(255, 255, 255, 0.2),
      -7px 0 0 0 rgba(255, 255, 255, 0.2);
  }
`
