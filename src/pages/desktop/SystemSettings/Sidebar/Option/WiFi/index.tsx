import * as S from './styles'
import WiFiLogo from '../../../../../../assets/icons/Wifi-icon.png'
import { Toggle } from '../../../../../../components/Toggle'

export function WiFiOption() {
  return (
    <S.WiFiOptionContainer>
      <S.ConnectedWiFiToggleContainer>
        <S.WiFiToggleContainer>
          <S.WiFiIconContainer>
            <img src={WiFiLogo} alt="Wi-fi Logo" />
            <p> Wi-Fi</p>
          </S.WiFiIconContainer>
          <Toggle />
        </S.WiFiToggleContainer>
        <S.ConnectedWiFiInfoContainer></S.ConnectedWiFiInfoContainer>
      </S.ConnectedWiFiToggleContainer>
    </S.WiFiOptionContainer>
  )
}
