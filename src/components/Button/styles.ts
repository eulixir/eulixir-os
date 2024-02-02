import styled from 'styled-components'

export const Button = styled.button`
  background: ${({ theme }) => theme.button.background};
  outline: none;
  border: none;

  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;

  font-size: 0.775rem;
  color: ${({ theme }) => theme.button.fontColor};

  transition: 0.2s;

  &:active {
    background: ${({ theme }) => theme.button.backgroundFocus};
  }
  -webkit-box-shadow: 0px 1px 1px 0px rgba(99, 97, 99, 1);
  -moz-box-shadow: 0px 1px 1px 0px rgba(99, 97, 99, 1);
  box-shadow: 0px 1px 1px 0px rgba(99, 97, 99, 1);
`
