import styled from 'styled-components'

interface OptionButtonProps {
  $active: string
}

export const OptionButton = styled.button<OptionButtonProps>`
  background: ${({ theme, $active }) =>
    $active === 'true' ? theme.secondaryMainColor : 'transparent'};

  width: 100%;
  height: 30px;

  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 6px;

  color: ${({ theme }) => theme.apps.systemSettings.fonts.primary};

  font-weight: 600;
  font-size: 0.775rem;

  border-radius: 8px;

  &:focus {
    background: ${({ theme }) => theme.secondaryMainColor};
  }

  margin-bottom: 3px;

  & > img {
    margin-right: 3px;
    height: 20px;
    width: 20px;
  }
`
