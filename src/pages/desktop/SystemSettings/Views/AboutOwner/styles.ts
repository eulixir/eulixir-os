import styled from 'styled-components'

export const AboutOwnerContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 4px;

  overflow-x: scroll;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const OwnerCardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 20px;

  color: ${({ theme }) => theme.apps.systemSettings.fonts.primary};

  & > img {
    width: 100px;
    border-radius: 50%;
  }

  & > h3 {
    margin-top: 5px;
  }

  & > p {
    margin-top: 2px;
  }
`
