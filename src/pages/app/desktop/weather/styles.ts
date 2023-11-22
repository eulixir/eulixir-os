import { styled } from 'styled-components'

export const WeatherContainer = styled.section`
  position: absolute;

  width: 80vw;
  height: 70vh;

  top: 15%;

  background-image: url('https://c1.wallpaperflare.com/preview/804/778/325/sky-background-nature-blue.jpg');
  background-size: cover;
  background-position: center;

  border: 0.01px solid ${({ theme }) => theme.colors.menubar.disabled};

  -webkit-box-shadow: inset 0px 0px 0px 1px
    ${({ theme }) => theme.splash.background};
  -moz-box-shadow: inset 0px 0px 0px 1px
    ${({ theme }) => theme.splash.background};
  box-shadow: inset 0px 0px 0px 1px ${({ theme }) => theme.splash.background};
  border-radius: 9px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const SideBarContainer = styled.div`
  height: 100%;
  max-width: 292px;
  min-width: 130px;

  background-color: ${({ theme }) =>
    theme.apps.weather.mostlyCloudly.sideBarBackground};

  border-radius: 12px 0 0 12px;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: relative;

  padding-top: 55px;
`

export const LocationsContainer = styled.div`
  width: 100%;
  padding: 0 18px;
`

export const ResizeContainer = styled.div`
  height: 100%;
  width: 1px;
  position: absolute;
  right: 0;

  &:hover {
    cursor: col-resize;
  }
`

export const WeatherInfoContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`
