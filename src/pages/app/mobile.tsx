import {
  DynamicIsland,
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
    { left: 70 },
    { right: 70 },
    { bottom: 70 },
    { right: 0, bottom: 70 },
    { top: 70, right: 0 },
    { left: 70, bottom: 0 },
  ]
  return (
    <MobileContainer>
      <IphoneLine>
        {lineDetails.map((line, index) => (
          <IphoneCaseLine key={index} {...line} />
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
