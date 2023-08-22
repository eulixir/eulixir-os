import styled from 'styled-components'

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 4px;

  position: relative;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`
interface IconModelProps {
  iconurl: string
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

  margin-top: 2px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:active > img {
    filter: brightness(0.4);
  }

  & > span {
    position: absolute;
    top: -3900000px;
  }

  &:hover > span {
    width: auto;
    padding: 6px 12px;

    white-space: nowrap;

    background-color: ${({ theme }) => theme.colors.menuBar};
    color: ${({ theme }) => theme.colors.secondary};
    position: absolute;

    border: 0.7px solid ${({ theme }) => theme.colors.buttonFocus};

    border-radius: 4px;
    font-size: 12px;
    top: -39px;
  }
`

interface ActiveBulletProps {
  active: boolean
}

export const ActiveBullet = styled.div<ActiveBulletProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.secondary : 'transparent'};

  position: absolute;

  width: 4px;
  height: 4px;

  border-radius: 50%;
  bottom: 0;
`

export const ArrowDiv = styled.div`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: -4px;

  background-color: ${({ theme }) => theme.colors.menuBar};

  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  border-right: 1px solid ${({ theme }) => theme.colors.buttonFocus};
  border-bottom: 1px solid ${({ theme }) => theme.colors.buttonFocus};

  transform: rotate(45deg);
`
