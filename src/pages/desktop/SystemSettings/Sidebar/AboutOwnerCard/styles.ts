import styled from 'styled-components'

interface AboutOwnerCardButtonProps {
  $active: string
}

export const AboutOwnerCardButton = styled.button<AboutOwnerCardButtonProps>`
  margin-top: 8px;
  width: 100%;
  height: 47px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border-radius: 6px;

  outline: none;
  border: none;

  margin-bottom: 10px;

  background: ${({ theme, $active }) =>
    $active === 'true' ? theme.secondaryMainColor : 'transparent'};

  &:focus {
    background: ${({ theme }) => theme.secondaryMainColor};
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  & > p {
    font-size: 0.775rem;
    font-weight: 700;
    color: ${({ theme }) => theme.apps.systemSettings.fonts.primary};
  }

  & > span {
    font-size: 0.7rem;
    font-weight: 500;
    padding-top: 3.5px;
    color: ${({ theme }) => theme.apps.systemSettings.fonts.secondary};
  }
`
