import { useContext } from 'react'

import * as S from './styles'
import { DragControls } from 'framer-motion'
import { Process } from '../../../@types/process'
import { ProcessContext } from '../../../contexts/processContext'

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

  return (
    <S.DragContainer
      onClick={() => addNewProcess(process)}
      style={{ zIndex }}
      onPointerDown={(e) => {
        dragControls.start(e)
      }}
    />
  )
}
