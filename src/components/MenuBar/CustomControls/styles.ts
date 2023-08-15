import styled from 'styled-components'

export const CustomControlContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-size: 0.8rem;

  margin: 0 1rem;

  & > div {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    & > *:nth-child(1) {
      font-weight: 700;
      margin-left: 0.4rem;
    }

    & > * {
      padding: 0 0.7rem;
    }
  }

  & > *:hover {
    cursor: default;
  }
`

export const MenuBarButtonBase = styled.button`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: none;
  color: white;
  outline: none;

  border-radius: 6px;
`

export const CustomControlButton = styled(MenuBarButtonBase)`
  &:focus {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 5px 0 0 0 rgba(255, 255, 255, 0.2),
      -5px 0 0 0 rgba(255, 255, 255, 0.2);

    -webkit-box-shadow: 5px 0 0 0 rgba(255, 255, 255, 0.2),
      -5px 0 0 0 rgba(255, 255, 255, 0.2);

    -moz-box-shadow: 5px 0 0 0 rgba(255, 255, 255, 0.2),
      -5px 0 0 0 rgba(255, 255, 255, 0.2);
  }
`
export const MacOsIconButton = styled(MenuBarButtonBase)`
  &:focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 7px 0 0 0 rgba(255, 255, 255, 0.1),
      -7px 0 0 0 rgba(255, 255, 255, 0.1);

    -webkit-box-shadow: 7px 0 0 0 rgba(255, 255, 255, 0.1),
      -7px 0 0 0 rgba(255, 255, 255, 0.1);

    -moz-box-shadow: 7px 0 0 0 rgba(255, 255, 255, 0.1),
      -7px 0 0 0 rgba(255, 255, 255, 0.1);
  }
`
