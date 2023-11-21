/* eslint-disable prettier/prettier */
import styled from 'styled-components'

interface LocationCardProps {
  active: boolean
}

export const LocationCardContainer = styled.div<LocationCardProps>`
  width: 100%;
  background: red;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background: ${({ theme, active }) =>
    active ? '#406537' : theme.apps.weather.fonts.inactiveBackground};

  border-radius: 6px;
`
export const LocationInfoContainer = styled.div<LocationCardProps>`
  display: flex;
  width: 100%;
  align-items: flex-start;
  padding: 2px 7px 2px 7px;
  justify-content: space-between;

  & > div {
    padding-top: 5px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    & > h4 {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.apps.weather.fonts.white};
    }
    & > p {
      font-weight: 600;
      font-size: 0.6rem;
      color: ${({ theme, active }) =>
    active
      ? theme.apps.weather.fonts.transluscentWhite
      : theme.apps.weather.fonts.foreground};
    }
  }
  & > h2 {
    font-size: 2rem;
    font-weight: 400;

    color: ${({ theme, active }) =>
    active
      ? theme.apps.weather.fonts.transluscentWhite
      : theme.apps.weather.fonts.foreground};
  }
`
export const StatusAndPositionContainer = styled.div<LocationCardProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 0.6rem;
  font-weight: 600;
  padding: 0px 7px 4px 7px;

  color: ${({ theme, active }) =>
    active
      ? theme.apps.weather.fonts.transluscentWhite
      : theme.apps.weather.fonts.foreground};

  & > div {
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
