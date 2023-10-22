import styled from 'styled-components'

import * as Menubar from '@radix-ui/react-menubar'
import { buttonBaseStyles } from '../../../styles/globalComponents'

export const MenuBarButtonBase = styled.button`
  ${buttonBaseStyles}
`

export const CustomControlButton = styled(Menubar.Trigger)`
  ${buttonBaseStyles}
`

export const DropdownArea = styled(Menubar.Content)`
  background: ${({ theme }) => theme.colors.menuBar};
  color: ${({ theme }) => theme.colors.font};

  width: 200px;

  border-radius: 4px;
  font-size: 0.9rem;

  backdrop-filter: blur(10px);
`

export const Section = styled(Menubar.Separator)`
  width: 100%;
  background: ${({ theme }) => theme.colors.menubar.separator};
  margin: 7px 0;

  height: 1px;
`

export const MenubarItem = styled(Menubar.Item)`
  & > span {
    display: flex;
    justify-content: space-between;
    margin: 0.3rem 0;

    .shortcut {
      color: ${({ theme }) => theme.colors.menubar.disabled};
    }
  }
`
