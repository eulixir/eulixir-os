import { useContext } from 'react'
import * as S from './styles'
import { ProcessContext, enumStatus } from '../../../contexts/processContext'
import { CurrentAppContext } from '../../../contexts/currentAppContext'
import { getAllProcesses } from '../../../services/processes/getAll'

interface WindowControlsProps {
  pid: number
  zIndex: number
}

export function WindowControls({ pid, zIndex }: WindowControlsProps) {
  const { closeProcess, minimizeProcess } = useContext(ProcessContext)
  const { setNewCurrentApp } = useContext(CurrentAppContext)

  function handleMinimize() {
    minimizeProcess(pid)

    const processes = getAllProcesses().reverse()

    const lastProcess = processes.find(
      ({ status, pid: processId }) =>
        status === enumStatus.OPEN && pid !== processId,
    ) || { pid: 1 }

    setNewCurrentApp(lastProcess.pid)
  }

  return (
    <S.WindowControlsContainer style={{ zIndex }}>
      <S.Close onClick={() => closeProcess(pid)}></S.Close>

      <S.Minimize onClick={handleMinimize}></S.Minimize>

      <S.Maximize></S.Maximize>
    </S.WindowControlsContainer>
  )
}
