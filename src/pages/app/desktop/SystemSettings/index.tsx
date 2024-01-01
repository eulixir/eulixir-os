import { useContext } from 'react'
import {
  BaseWindow,
  BaseWindowType,
  WindowStyle,
} from '../../../../components/baseWindow'
import { ProcessContext } from '../../../../contexts/processContext'
import { getProcess } from '../../../../services/processes/getProcess'

const pid = 4

export function SystemSettingsApp() {
  const configs: BaseWindowType = {
    windowcontrolsfullsize: 'true',
    appname: 'System Settings',
    windowstyle: WindowStyle.Sidebar,
    appid: pid,
    height: '80%',
    width: '730px',
  }

  // const process = getProcess(pid)!

  // const { addNewProcess } = useContext(ProcessContext)

  return <BaseWindow {...configs}></BaseWindow>
}
