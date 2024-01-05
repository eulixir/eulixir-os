import { useContext } from 'react'
import {
  WindowStyle,
  BaseWindow,
  BaseWindowType,
} from '../../../../components/baseWindow'
import { ProcessContext } from '../../../../contexts/processContext'

import * as S from './styles'

import { getProcess } from '../../../../services/processes/getProcess'

const pid = 1

export function FinderApp() {
  const configs: BaseWindowType = {
    $windowControlsFullSize: 'true',
    $appName: 'Finder',
    $windowStyle: WindowStyle.FullSized,
    $appId: pid,
  }

  const process = getProcess(pid)!

  const { addNewProcess } = useContext(ProcessContext)

  return (
    <BaseWindow {...configs} key={configs.$appId}>
      <S.FinderContainer
        onClick={() => addNewProcess(process)}
      ></S.FinderContainer>
    </BaseWindow>
  )
}
