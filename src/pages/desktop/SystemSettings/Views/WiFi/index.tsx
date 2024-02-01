import * as S from './styles'
import WiFiLogo from '../../../../../assets/icons/Wifi-icon.png'
import { Toggle } from '../../../../../components/Toggle'
import { useContext, useEffect, useState } from 'react'
import { SystemSettingsContext } from '../../../../../contexts/SystemSettinsContext'

import { ImLock } from 'react-icons/im'
import { BiWifi } from 'react-icons/bi'
import { FaCircle } from 'react-icons/fa'
import { Button } from '../../../../../components/Button'

export function WiFiView() {
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
        <S.ConnectedWiFiInfoContainer>
          <S.ConnectedWiFiStatus>
            <p>Eulixir Os Network</p>
            <span>
              <FaCircle color="#37d74b" size={12} />
              <p>Conected</p>
            </span>
          </S.ConnectedWiFiStatus>
          <S.WiFiDetails>
            <ImLock size={14} />
            <BiWifi />
            <Button text="Details..." width={63} height={20} />
          </S.WiFiDetails>
        </S.ConnectedWiFiInfoContainer>
      </S.ConnectedWiFiToggleContainer>
    </S.WiFiOptionContainer>
  )
}
