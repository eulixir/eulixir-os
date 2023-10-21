import styled from 'styled-components'
import * as Menubar from '@radix-ui/react-menubar'
import { buttonBaseStyles } from '../../../styles/globalComponents'

export const MacOsIconButton = styled(Menubar.Trigger)`
  ${buttonBaseStyles}

  width: 40px;
  margin-left: 0.5rem;
`

export const DropdownArea = styled(Menubar.Content)`
  background: ${({ theme }) => theme.colors.menuBar};
  color: ${({ theme }) => theme.colors.font};

  width: 270px;
  padding: 10px;

  position: absolute;
  left: 0;

  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;

  backdrop-filter: blur(10px);
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
