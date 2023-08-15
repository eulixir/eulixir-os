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
  color: ${({ theme }) => theme.colors.font};
  outline: none;

  border-radius: 4px;
`

export const CustomControlButton = styled(MenuBarButtonBase)`
  &:active {
    background: ${({ theme }) => theme.colors.buttonFocus};
    box-shadow: 5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -webkit-box-shadow: 5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -moz-box-shadow: 5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -5px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};
  }
`
export const MacOsIconButton = styled(MenuBarButtonBase)`
  &:active {
    background: ${({ theme }) => theme.colors.buttonFocus};
    box-shadow: 7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -webkit-box-shadow: 7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};

    -moz-box-shadow: 7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus},
      -7px 0 0 0 ${({ theme }) => theme.colors.buttonFocus};
  }
`
