import styled from 'styled-components'

import * as Menubar from '@radix-ui/react-menubar'
import { buttonBaseStyles } from '../../../styles/globalComponents'

export const MenuBarButtonBase = styled.button`
  ${buttonBaseStyles}
`

export const CustomControlButton = styled(Menubar.Trigger)`
  ${buttonBaseStyles}
`

export const Section = styled(Menubar.Separator)`
  width: 100%;
  background: ${({ theme }) => theme.colors.menubar.separator};
  margin: 7px 0;

  height: 1px;
`

export const DropdownArea = styled(Menubar.Content)`
  font-weight: 300px;
  z-index: 999;
  background: ${({ theme }) => theme.colors.menuBar};
  color: ${({ theme }) => theme.colors.font};

  margin-top: 0.5px;

  width: 270px;

  border: 0.5px solid ${({ theme }) => theme.colors.menubar.border};

  position: absolute;
  padding: 0 5px;
  left: 0;

  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(40px);
`

export const MenubarItem = styled(Menubar.Item)`
  & > span {
    display: flex;
    justify-content: space-between;
    margin: 0.3rem 0;

    .shortcut {
      color: ${({ theme }) => theme.colors.menubar.disabled};
    }
    padding: 3px 2px;
    margin-left: 12px;
  }

  &:hover {
    background: green;
    outline: none;
    border: none;
    border-radius: 4px;
  }
`
