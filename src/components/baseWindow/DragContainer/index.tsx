import { useContext } from 'react'

import * as S from './styles'
import { Process } from '../../../@types/process'
import { ProcessContext } from '../../../contexts/processContext'
import { CurrentAppContext } from '../../../contexts/currentAppContext'

interface DragContainerProps {
  zIndex: number
  process: Process
}

export function DragContainer({ process, zIndex }: DragContainerProps) {
  const { addNewProcess } = useContext(ProcessContext)
  const { setNewCurrentApp } = useContext(CurrentAppContext)

  function handleAddnewProcess() {
    addNewProcess(process)
    setNewCurrentApp(process.pid)
  }

  return (
    <S.DragContainer
      className="drag-handle"
      onClick={handleAddnewProcess}
      style={{ zIndex }}
    />
  )
}
