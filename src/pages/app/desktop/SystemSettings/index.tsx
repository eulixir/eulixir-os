import * as S from './styles'
import {
  BaseWindow,
  BaseWindowType,
  WindowStyle,
} from '../../../../components/baseWindow'
import { SystemSettingsSidebar } from './Sidebar'
import { SystemSettingsView } from './SystemSettingsView'
import { SystemSettingsContext } from '../../../../contexts/SystemSettinsContext'

import { useContext, useEffect } from 'react'

const pid = 4

export function SystemSettingsApp() {
  const configs: BaseWindowType = {
    $windowControlsFullSize: 'true',
    $appName: 'System Settings',
    $windowStyle: WindowStyle.Sidebar,
    $appId: pid,
    height: '80%',
    width: '716px',
  }

  const { currentAppView } = useContext(SystemSettingsContext)

  console.log()

  return (
    <BaseWindow {...configs}>
      <S.SystemSettingsContainer>
        <SystemSettingsSidebar />
        <SystemSettingsView View={currentAppView.view} />
      </S.SystemSettingsContainer>
    </BaseWindow>
  )
}
