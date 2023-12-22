import { useContext } from 'react'
import { AppWindowContext, Process } from '../../../contexts/appWindowContext'
import * as S from './styles'
import { DragControls } from 'framer-motion'

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
  const { addNewProcess } = useContext(AppWindowContext)

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
