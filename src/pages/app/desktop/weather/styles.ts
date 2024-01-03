import { styled } from 'styled-components'

export const WeatherContainer = styled.section`
  position: absolute;

  width: 80vw;
  height: 70vh;

  top: 15%;

  background-size: cover;

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

  box-shadow: 1px 7px 25px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 7px 25px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 7px 25px 0px rgba(0, 0, 0, 0.75);
`

export const SideBarContainer = styled.div`
  height: 100%;
  max-width: 292px;
  min-width: 130px;

  background-color: ${({ theme }) =>
    theme.apps.weather.mostlyCloudy.sideBarBackground};

  border-radius: 9px 0 0 9px;

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

  background: rgb(71, 167, 216);
  background: linear-gradient(
    0deg,
    rgba(71, 167, 216, 1) 9%,
    rgba(71, 167, 216, 1) 11%,
    rgba(71, 167, 216, 1) 16%,
    rgba(71, 167, 216, 1) 21%,
    rgba(71, 167, 216, 0.7833508403361344) 28%,
    rgba(71, 167, 216, 0.6909138655462185) 32%,
    rgba(71, 167, 216, 0.5564600840336135) 38%,
    rgba(71, 167, 216, 0.4248074229691877) 46%,
    rgba(71, 167, 216, 0.3379726890756303) 57%,
    rgba(71, 167, 216, 0.2091211484593838) 68%,
    rgba(71, 167, 216, 0.10828081232492992) 76%,
    rgba(71, 167, 216, 0) 86%,
    rgba(71, 167, 216, 0) 93%
  );

  display: flex;
  align-items: center;
  justify-content: center;
`
export const InputContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`
