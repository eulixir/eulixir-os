import styled from 'styled-components'

export const DockContainer = styled.div`
  position: fixed;

  height: 56px;

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

    margin-bottom: 8px;

    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: inset 0px 0px 1px 0px
      ${({ theme }) => theme.colors.dock.internalBoxShadow};
    box-shadow: 0px 20px 70px 1px ${({ theme }) => theme.colors.dock.boxShadow};
  }
`

export const Separator = styled.span`
  width: 1px;
  height: 76%;
  background-color: ${({ theme }) => theme.colors.buttonFocus};
`
