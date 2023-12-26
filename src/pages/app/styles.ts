import styled from 'styled-components'

export const DesktopContainer = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: none;

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

  @media (max-width: 450px) {
    height: 98%;
    width: 98%;
  }
`

interface IphoneCaseProps {
  top?: number
  left?: number
  right?: number
  bottom?: number
  rotate?: number
  height?: number
  width?: number
  iphoneborderradius?: string
}

export const IphoneButtons = styled.div<IphoneCaseProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  position: absolute;
  background: #878787;
  border-radius: ${({ iphoneborderradius }) => iphoneborderradius};

  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  bottom: ${({ bottom }) => bottom}px;

  overflow: hidden;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  & > div {
    width: 100%;
    height: 10spx;
    border-radius: 30%;
    background: rgb(218, 218, 218);
    background: linear-gradient(
      0deg,
      rgba(218, 218, 218, 0.6927849264705883) 14%,
      rgba(42, 42, 42, 1) 100%
    );
  }

  @media (max-width: 450px) {
    right: calc(10% - 38px);
  }
`

export const IphoneCaseLine = styled.div<IphoneCaseProps>`
  height: 6px;
  width: 2px;
  background: #969696;
  position: absolute;
  rotate: ${({ rotate }) => rotate}deg;

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
  border: 1.75px solid white;

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
