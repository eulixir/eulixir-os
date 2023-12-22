import { useContext } from 'react'
import {
  WindowStyle,
  BaseWindow,
  BaseWindowType,
} from '../../../../components/baseWindow'
import { ProcessContext } from '../../../../contexts/processContext'

import * as S from './styles'
import { Process } from '../../../../@types/process'

export function FinderApp() {
  const configs: BaseWindowType = {
    windowcontrolsfullsize: 'true',
    appname: 'Finder',
    windowstyle: WindowStyle.FullSized,
    appid: 1,
  }

  const { addNewProcess } = useContext(ProcessContext)

  const process: Process = {
    pid: 1,
    status: 'open',
  }

  return (
    <>
      <BaseWindow {...configs} key={configs.appid}>
        <S.FinderContainer onClick={() => addNewProcess(process)}>
          <p>aa</p>Finder
        </S.FinderContainer>
      </BaseWindow>
    </>
  )
}
