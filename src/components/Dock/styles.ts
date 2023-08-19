import styled from 'styled-components'

export const DockContainer = styled.div`
  position: fixed;

  height: 8px;

  width: 100%;

  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 100;

  & > div {
    background-color: ${({ theme }) => theme.colors.dock.background};

    border: 0.5px solid ${({ theme }) => theme.colors.dock.border};

    border-radius: 13px;

    margin-bottom: -68px;

    height: 60px;
    width: auto;
    display: flex;

    box-shadow: inset 0px 0px 1px 0px
      ${({ theme }) => theme.colors.dock.internalBoxShadow};
    box-shadow: 0px 20px 70px 1px ${({ theme }) => theme.colors.dock.boxShadow};
  }

  &:hover > div {
    transition: 0.2s;
    /* clean transition */

    margin-bottom: 68px;
  }

  & > div:hover {
    transition: 0.2s;

    margin-bottom: 68px;
  }
`

export const Separator = styled.span`
  width: 1px;
  height: 76%;
  background-color: ${({ theme }) => theme.colors.dock.iconLabel};
`
