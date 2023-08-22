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

interface MenuBarButtonBaseProps {
  oppened: boolean
}

export const MenuBarButtonBase = styled.button<MenuBarButtonBaseProps>`
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
  &:hover {
    background: ${({ theme, oppened }) =>
      oppened ? theme.colors.buttonFocus : 'transparent'};
    box-shadow: 5px 0 0 0
        ${({ theme, oppened }) =>
          oppened ? theme.colors.buttonFocus : 'transparent'},
      -5px 0 0 0 ${({ theme, oppened }) => (oppened ? theme.colors.buttonFocus : 'transparent')};

    -webkit-box-shadow: 5px 0 0 0
        ${({ theme, oppened }) =>
          oppened ? theme.colors.buttonFocus : 'transparent'},
      -5px 0 0 0 ${({ theme, oppened }) => (oppened ? theme.colors.buttonFocus : 'transparent')};

    -moz-box-shadow: 5px 0 0 0
        ${({ theme, oppened }) =>
          oppened ? theme.colors.buttonFocus : 'transparent'},
      -5px 0 0 0 ${({ theme, oppened }) => (oppened ? theme.colors.buttonFocus : 'transparent')};
  }
`
export const MacOsIconButton = styled(MenuBarButtonBase)`
  &:hover {
    background: ${({ theme, oppened }) =>
      oppened ? theme.colors.buttonFocus : 'transparent'};

    box-shadow: 7px 0 0 0
        ${({ theme, oppened }) =>
          oppened ? theme.colors.buttonFocus : 'transparent'},
      -7px 0 0 0 ${({ theme, oppened }) => (oppened ? theme.colors.buttonFocus : 'transparent')};

    -webkit-box-shadow: 7px 0 0 0
        ${({ theme, oppened }) =>
          oppened ? theme.colors.buttonFocus : 'transparent'},
      -7px 0 0 0 ${({ theme, oppened }) => (oppened ? theme.colors.buttonFocus : 'transparent')};

    -moz-box-shadow: 7px 0 0 0
        ${({ theme, oppened }) =>
          oppened ? theme.colors.buttonFocus : 'transparent'},
      -7px 0 0 0 ${({ theme, oppened }) => (oppened ? theme.colors.buttonFocus : 'transparent')};
  }
`
