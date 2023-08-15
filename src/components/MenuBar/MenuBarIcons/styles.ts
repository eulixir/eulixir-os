import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding-right: 1rem;

  & > main {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > * {
      margin: 0 0.3rem;
    }
  }

  & > * {
    color: var(--gray-light-100);
  }
`
