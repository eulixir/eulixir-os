import styled from 'styled-components'

export const SettingsSidebarContainer = styled.div`
  background: transparent;
  width: 309px;
  height: 100%;

  border-right: 1.5px solid black;

  background: ${({ theme }) => theme.apps.systemSettings.sidebarBackground};

  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(20px);

  padding: 55px 10px 10px 10px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`
