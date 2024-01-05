import { ComponentType, useContext } from 'react'
import { ProcessContext } from '../../../../../contexts/processContext'
import { getProcess } from '../../../../../services/processes/getProcess'
import { CurrentAppContext } from '../../../../../contexts/currentAppContext'

import * as S from './styles'

const pid = 4

interface SystemSettingsOptionsProps {
  View: ComponentType
}

export function SystemSettingsView({ View }: SystemSettingsOptionsProps) {
  const process = getProcess(pid)!
  const { addNewProcess } = useContext(ProcessContext)
  const { setNewCurrentApp } = useContext(CurrentAppContext)

  function handleAddnewProcess() {
    addNewProcess(process)
    setNewCurrentApp(process.pid)
  }

  return (
    <S.SystemSettingsViewContainer onClick={handleAddnewProcess}>
      <div>{View && <View />}</div>
    </S.SystemSettingsViewContainer>
  )
}
