import * as S from './styles'
import { useContext } from 'react'
import {
  BaseWindow,
  BaseWindowType,
  WindowStyle,
} from '../../../../components/baseWindow'
import { ProcessContext } from '../../../../contexts/processContext'
import { getProcess } from '../../../../services/processes/getProcess'
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

  const process = getProcess(pid)!

  const { addNewProcess } = useContext(ProcessContext)

  return (
    <BaseWindow {...configs}>
      <S.SystemSettingsContainer onClick={() => addNewProcess(process)}>
        <SystemSettingsSidebar />
        <SystemSettingsOptions />
      </S.SystemSettingsContainer>
    </BaseWindow>
  )
}
