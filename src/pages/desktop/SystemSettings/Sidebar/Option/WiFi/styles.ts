import styled from 'styled-components'

export const WiFiOptionContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`

export const ConnectedWiFiToggleContainer = styled.section`
  background: ${({ theme }) => theme.apps.systemSettings.sectionBackground};

  height: 100px;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.apps.systemSettings.sectionBorder};
  border-radius: 8px;
`

export const WiFiToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid
    ${({ theme }) => theme.apps.systemSettings.secondarySectionBorder};

  padding: 13px 10px 13px 10px;
`

export const WiFiIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  & > p {
    margin-left: 10px;

    color: ${({ theme }) => theme.apps.systemSettings.fonts.primary};
    font-size: 0.875rem;
  }

  & > img {
    width: 25px;
  }
`
export const ConnectedWiFiInfoContainer = styled.div``
