import styled from 'styled-components'

export const SplashScreenContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.splash.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 15vh;

  z-index: 50;

  & > * {
    margin-bottom: 9vh;
    color: ${({ theme }) => theme.splash.icon};
  }
`

export const ProgressBar = styled.div`
  width: 16vw;
  height: 8px;
  border-radius: 0.5vw;
  overflow: hidden;
  background: ${({ theme }) => theme.splash.loadbar};
`

interface ProgressProps {
  $progress: number
}

export const RunningBar = styled.div<ProgressProps>`
  height: 100%;
  width: ${(props) => props.$progress}%;
  background-color: ${({ theme }) => theme.splash.loadbarProgress};

  transition: width 0.5s;
`
