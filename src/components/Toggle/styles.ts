import { Root, Thumb } from '@radix-ui/react-switch'
import styled from 'styled-components'

export const SwitchRoot = styled(Root)`
  width: 40px;
  height: 25px;
  background-color: ${({ theme }) => theme.toggle.rootColor};
  border-radius: 9999px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  outline: none;
  border: 1px solid ${({ theme }) => theme.toggle.rootBorder};

  &[data-state='checked'] {
    background-color: ${({ theme }) => theme.secondaryMainColor};
  }
`

export const RootThumb = styled(Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: ${({ theme }) => theme.toggle.thumbColor};
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(19px);
  }
`
