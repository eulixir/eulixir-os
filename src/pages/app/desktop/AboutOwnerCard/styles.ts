import styled from 'styled-components'

export const AboutOwnerCardContainer = styled.div`
  margin-top: 8px;
  width: 100%;
  height: 47px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border-radius: 6px;

  &:hover {
    background: #2564c3;
  }
`

export const OwnerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 50px;

  & > img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
  }
`

export const OwnerInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & > p {
    font-size: 0.775rem;
    font-weight: 600;
    color: ${({ theme }) => theme.apps.systemSettings.fonts.primary};
  }

  & > span {
    font-size: 0.7rem;
    font-weight: 500;
    padding-top: 3.5px;
    color: ${({ theme }) => theme.apps.systemSettings.fonts.secondary};
  }
`
