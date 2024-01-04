import * as S from './styles'
import {
  BaseWindow,
  BaseWindowType,
  WindowStyle,
} from '../../../../components/baseWindow'
import { SystemSettingsSidebar } from './Sidebar'
import { SystemSettingsOptions } from './SystemSettingsOptions'

const pid = 4

export function SystemSettingsApp() {
  const configs: BaseWindowType = {
    windowcontrolsfullsize: 'true',
    appname: 'System Settings',
    windowstyle: WindowStyle.Sidebar,
    appid: pid,
    height: '80%',
    width: '716px',
  }

  return (
    <BaseWindow {...configs}>
      <S.SystemSettingsContainer>
        <SystemSettingsSidebar />
        <SystemSettingsOptions />
      </S.SystemSettingsContainer>
    </BaseWindow>
  )
}
