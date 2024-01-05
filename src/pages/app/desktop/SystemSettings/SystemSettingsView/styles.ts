import styled from 'styled-components'

export const SystemSettingsViewContainer = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.apps.systemSettings.optionsBackground};

  padding: 17px 17px 0 17px;
`

export const SystemSettingsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  & > div > svg {
    color: white;

    &:first-child {
      margin-right: 13px;
    }
  }

  & > p {
    margin-left: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.apps.systemSettings.fonts.primary};
  }
`
