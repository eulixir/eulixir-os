import { useContext } from 'react'
import { ProcessContext } from '../../../../../contexts/processContext'
import { getProcess } from '../../../../../services/processes/getProcess'
import * as S from './styles'

const pid = 4

export function SystemSettingsOptions() {
  const process = getProcess(pid)!

  const { addNewProcess } = useContext(ProcessContext)

  return (
    <S.SystemSettingsOptionsContainer onClick={() => addNewProcess(process)}>
      aaa
    </S.SystemSettingsOptionsContainer>
  )
}
