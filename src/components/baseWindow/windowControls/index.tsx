import { useContext, useEffect, useState } from 'react'
import { ProcessContext, enumStatus } from '../../../contexts/processContext'
import { CurrentAppContext } from '../../../contexts/currentAppContext'
import { getAllProcesses } from '../../../services/processes/getAll'

import { IoClose } from 'react-icons/io5'
import { IoMdResize } from 'react-icons/io'
import { LuMinus } from 'react-icons/lu'

import * as S from './styles'

interface WindowControlsProps {
  pid: number
  zIndex: number
}

export function WindowControls({ pid, zIndex }: WindowControlsProps) {
  const { closeProcess, minimizeProcess } = useContext(ProcessContext)
  const { setNewCurrentApp, currentApp } = useContext(CurrentAppContext)

  const [activeWindowControl, setActiveWindowControl] = useState(false)

  useEffect(() => {
    if (currentApp.id === pid) {
      setActiveWindowControl(true)
      return
    }

    setActiveWindowControl(false)
  }, [currentApp, pid])

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
      <S.Close
        $active={activeWindowControl.toString()}
        onClick={() => closeProcess(pid)}
      >
        <IoClose size="9" />
      </S.Close>

      <S.Minimize
        $active={activeWindowControl.toString()}
        onClick={handleMinimize}
      >
        <LuMinus size="9" />
      </S.Minimize>

      <S.Maximize $active={activeWindowControl.toString()}>
        <IoMdResize size="7" />
      </S.Maximize>
    </S.WindowControlsContainer>
  )
}
