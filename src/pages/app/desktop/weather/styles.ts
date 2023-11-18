import { styled } from 'styled-components'

export const WeatherContainer = styled.section`
  position: absolute;

  width: 80vw;
  height: 70vh;

  top: 15%;

  background: ${({ theme }) => theme.colors.mobileBackground};
  border: 0.01px solid ${({ theme }) => theme.colors.menubar.disabled};

  -webkit-box-shadow: inset 0px 0px 0px 1px
    ${({ theme }) => theme.splash.background};
  -moz-box-shadow: inset 0px 0px 0px 1px
    ${({ theme }) => theme.splash.background};
  box-shadow: inset 0px 0px 0px 1px ${({ theme }) => theme.splash.background};
  border-radius: 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const SideBarContainer = styled.div`
  height: 100%;
  max-width: 292px;
  min-width: 130px;

  background-color: blue;

  border-radius: 12px 0 0 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LocationsContainer = styled.div`
  background: blue;
`

export const ResizeContainer = styled.div`
  height: 100%;
  width: 1px;

  &:hover {
    cursor: col-resize;
  }
`
