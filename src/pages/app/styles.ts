import styled from 'styled-components'

export const DesktopContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MobileContainer = styled.div`
  background-color: #f3f3f3;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const IphoneLine = styled.div`
  position: relative;

  border-radius: 60px;
  box-shadow: 5px 0 5px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 450px) {
    height: 98%;
    width: 98%;
  }
`

interface IphoneCaseLine {
  top?: number
  left?: number
  right?: number
  bottom?: number
}

export const IphoneCaseLine = styled.div<IphoneCaseLine>`
  height: 3px;
  width: 2px;
  background: #969696;
  position: absolute;

  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  bottom: ${({ bottom }) => bottom}px;

  z-index: 999;
`

export const IphoneCase = styled.div`
  height: 934px;
  width: 434px;
  background: black;
  border-radius: 60px;

  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid white;

  box-shadow: 0px 0px 0px 2px #969696;

  @media (max-width: 450px) {
    height: 98%;
    width: 98%;
  }
`

export const IphoneScreen = styled.div`
  height: 97%;
  width: 95%;
  border-radius: 50px;
  position: relative;

  background-image: url(${({ theme }) => theme.colors.mobileBackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const DynamicIsland = styled.div`
  height: 30px;
  width: 100px;
  border-radius: 38.653px;
  background: #0a0a0a;

  margin-left: auto;
  margin-right: auto;

  left: 0;
  right: 0;

  top: 6px;
  margin-top: 8px;
`
