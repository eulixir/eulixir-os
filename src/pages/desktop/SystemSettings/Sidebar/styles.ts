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

export const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  margin-top: 10px;

  scroll-behavior: smooth;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 10px;
    transition: background-color 0.3s ease; /* Smooth transition for the thumb */
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: #c1c1c1;
    }
  }
`
