import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.menuBar};

  backdrop-filter: blur(90px);
  -webkit-backdrop-filter: blur(90px);

  height: 28px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
