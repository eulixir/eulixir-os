import { useContext } from 'react'

import * as S from './styles'
import { DragControls } from 'framer-motion'
import { Process } from '../../../@types/process'
import { ProcessContext } from '../../../contexts/processContext'
import { CurrentAppContext } from '../../../contexts/currentAppContext'

interface DragContainerProps {
  dragControls: DragControls
  zIndex: number
  process: Process
}

export function DragContainer({
  process,
  dragControls,
  zIndex,
}: DragContainerProps) {
  const { addNewProcess } = useContext(ProcessContext)
  const { setNewCurrentApp } = useContext(CurrentAppContext)

  function handleAddnewProcess() {
    addNewProcess(process)
    setNewCurrentApp(process.pid)
  }

  return (
    <S.DragContainer
      onClick={handleAddnewProcess}
      style={{ zIndex }}
      onPointerDown={(e) => {
        dragControls.start(e)
      }}
    />
  )
}
