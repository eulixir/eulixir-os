import * as S from './styles'
import WiFiLogo from '../../../../../assets/icons/Wifi-icon.png'
import { Toggle } from '../../../../../components/Toggle'
import { useContext, useEffect, useState } from 'react'
import { SystemSettingsContext } from '../../../../../contexts/SystemSettinsContext'

export function WiFiOption() {
  const { wifiState, toggleWifi } = useContext(SystemSettingsContext)

  const [wifiIconState, setWifiIconState] = useState(wifiState)

  useEffect(() => {
    setWifiIconState(wifiState)
  }, [wifiState, wifiIconState])

  return (
    <S.WiFiOptionContainer>
      <S.ConnectedWiFiToggleContainer>
        <S.WiFiToggleContainer>
          <S.WiFiIconContainer>
            <img src={WiFiLogo} alt="Wi-fi Logo" />
            <p> Wi-Fi</p>
          </S.WiFiIconContainer>
          <Toggle initState={wifiIconState} onClickFunction={toggleWifi} />
        </S.WiFiToggleContainer>
        <S.ConnectedWiFiInfoContainer></S.ConnectedWiFiInfoContainer>
      </S.ConnectedWiFiToggleContainer>
    </S.WiFiOptionContainer>
  )
}
