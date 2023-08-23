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

  & > nav {
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
