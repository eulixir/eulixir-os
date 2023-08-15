import styled from 'styled-components'

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  color: var(--gray-light-100);
  color: white;
  font-size: 0.8rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > * p:last-child {
    margin-left: 0.5rem;

    margin-right: 1.2rem;
  }
`
