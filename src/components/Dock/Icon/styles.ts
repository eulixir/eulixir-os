import styled from 'styled-components'

interface IconModelProps {
  iconUrl: string
}

export const IconModel = styled.button<IconModelProps>`
  background: transparent;
  border: none;
  outline: none;
  width: 49px;
  height: 49px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:active {
    filter: brightness(0.4);
  }
`
interface IconProps {
  active?: boolean
}

export const IconContainer = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 4px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  & > div {
    background-color: ${({ theme, active }) =>
      active ? theme.colors.secondary : 'transparent'};

    margin-top: 5px;
    border-radius: 50%;
    width: 5px;
    height: 5px;
  }
`
