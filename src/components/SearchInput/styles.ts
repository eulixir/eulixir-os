import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 0.5px solid grey;

  &:hover {
    outline: 4px solid ${({ theme }) => theme.secondaryMainColor};
  }

  & > div:first-child {
    height: 100%;
    width: 40px;

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
  padding-left: 4px;
  font-weight: 600;
  background: none;
  border: none;
  width: 100%;
  outline: none;
  color: grey;

  &::placeholder {
    color: ${({ theme }) => theme.apps.weather.fonts.white100};
  }

  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.apps.weather.fonts.white100};
  }

  &:focus {
    caret-color: ${({ theme }) => theme.secondaryMainColor};

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
