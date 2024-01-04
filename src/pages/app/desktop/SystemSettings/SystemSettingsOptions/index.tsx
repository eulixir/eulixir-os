import { useContext } from 'react'
import { ProcessContext } from '../../../../../contexts/processContext'
import { getProcess } from '../../../../../services/processes/getProcess'
import * as S from './styles'
import { CurrentAppContext } from '../../../../../contexts/currentAppContext'

const pid = 4

export function SystemSettingsOptions() {
  const process = getProcess(pid)!
  const { addNewProcess } = useContext(ProcessContext)
  const { setNewCurrentApp } = useContext(CurrentAppContext)

  function handleAddnewProcess() {
    addNewProcess(process)
    setNewCurrentApp(process.pid)
  }

  return (
    <S.SystemSettingsOptionsContainer onClick={handleAddnewProcess}>
      aaa
    </S.SystemSettingsOptionsContainer>
  )
}
