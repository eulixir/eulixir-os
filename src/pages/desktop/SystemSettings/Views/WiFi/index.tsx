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
            {wifiIconState ? <p>Eulixir Os Network</p> : <></>}

            {wifiIconState ? (
              <span>
                <FaCircle color="#37d74b" size={12} />
                <p>Conected</p>
              </span>
            ) : (
              <span style={{ paddingTop: '6px' }}>
                <FaCircle color="#ff453a" size={12} />
                <p>Wi-Fi is off</p>
              </span>
            )}
          </S.ConnectedWiFiStatus>

          {wifiIconState ? (
            <S.ActiveWiFiDetails>
              <ImLock size={14} />
              <BiWifi />
              <Button text="Details..." width={63} height={20} />
            </S.ActiveWiFiDetails>
          ) : (
            <S.ActiveWiFiDetails
              style={{ justifyContent: 'flex-end', paddingTop: '6px' }}
            >
              <Button text="Details..." width={63} height={20} />
            </S.ActiveWiFiDetails>
          )}
        </S.ConnectedWiFiInfoContainer>
      </S.ConnectedWiFiToggleContainer>
    </S.WiFiOptionContainer>
  )
}
