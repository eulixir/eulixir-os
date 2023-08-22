import {
  DynamicIsland,
  IphoneButtons,
  IphoneCase,
  IphoneCaseLine,
  IphoneLine,
  IphoneScreen,
  MobileContainer,
} from './styles'

interface MobileProps {
  changeOsTheme: () => void
}

export function Mobile(props: MobileProps) {
  const lineDetails = [
    { top: 70 },
    { left: 70, rotate: 90, top: -3 },
    { right: 70, rotate: 90, top: -3 },
    { bottom: 70 },
    { right: 0, bottom: 70 },
    { top: 70, right: 0 },
    { left: 70, bottom: -2, rotate: 90 },
  ]

  const buttons = [
    {
      top: 300,
      right: -6,
      width: 4,
      height: 110,
      iphoneBorderRadius: '0 1px 1px 0',
    },
    {
      width: 3.5,
      height: 35,
      top: 170,
      left: -5,
      iphoneBorderRadius: '1px 0 0 1px',
    },
    {
      width: 3.5,
      height: 65,
      top: 245,
      left: -5,
      iphoneBorderRadius: '1px 0 0 1px',
    },
    {
      width: 3.5,
      height: 65,
      top: 330,
      left: -5,
      iphoneBorderRadius: '1px 0 0 1px',
    },
  ]

  return (
    <MobileContainer>
      <IphoneLine>
        {lineDetails.map((line, index) => (
          <IphoneCaseLine key={index} {...line} />
        ))}

        {buttons.map((button, index) => (
          <IphoneButtons key={index} {...button}>
            <div></div>
            <div></div>
          </IphoneButtons>
        ))}

        <IphoneCase>
          <IphoneScreen>
            <DynamicIsland onClick={props.changeOsTheme} />
          </IphoneScreen>
        </IphoneCase>
      </IphoneLine>
    </MobileContainer>
  )
}
