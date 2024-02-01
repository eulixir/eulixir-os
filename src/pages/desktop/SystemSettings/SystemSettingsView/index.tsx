import { ComponentType, useContext } from 'react'
import { ProcessContext } from '../../../../contexts/processContext'
import { getProcess } from '../../../../services/processes/getProcess'
import { CurrentAppContext } from '../../../../contexts/currentAppContext'

import * as S from './styles'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { SystemSettingsContext } from '../../../../contexts/SystemSettinsContext'

const pid = 4

interface SystemSettingsOptionsProps {
  View: ComponentType
}

export function SystemSettingsView({ View }: SystemSettingsOptionsProps) {
  const process = getProcess(pid)!
  const { addNewProcess } = useContext(ProcessContext)
  const { setNewCurrentApp } = useContext(CurrentAppContext)
  const { currentAppView } = useContext(SystemSettingsContext)

  function handleAddnewProcess() {
    addNewProcess(process)
    setNewCurrentApp(process.pid)
  }

  return (
    <S.SystemSettingsViewContainer onClick={handleAddnewProcess}>
      <S.SystemSettingsHeader>
        <div>
          <IoIosArrowBack size={20} />
          <IoIosArrowForward size={20} />
        </div>
        <p>{currentAppView.name}</p>
      </S.SystemSettingsHeader>
      {View && <View />}
    </S.SystemSettingsViewContainer>
  )
}
