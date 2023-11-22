import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px;

  background: ${({ theme }) => theme.apps.weather.fonts.transluscent};

  backdrop-filter: blur(90px);
  -webkit-backdrop-filter: blur(90px);

  backdrop-filter: blur(10px);

  height: 25px;
  width: 184px;

  top: 10px;
  right: 10px;

  z-index: 2;

  &:hover {
    outline: 4px solid green;
  }

  & > div:first-child {
    height: 100%;
    width: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.apps.weather.fonts.white100};
  }
  & > div > svg:focus {
    color: ${({ theme }) => theme.apps.weather.fonts.white};
  }
`

export const SearchIconContainer = styled.div``

export const SearchInput = styled.input`
  background: none;
  border: none;
  width: 100%;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.apps.weather.fonts.white100};
  }

  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.apps.weather.fonts.white100};
  }

  &:focus {
    color: ${({ theme }) => theme.apps.weather.fonts.white};
  }
`

export const EraseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14%;

  & > svg {
    color: ${({ theme }) => theme.apps.weather.fonts.white};
  }
`
