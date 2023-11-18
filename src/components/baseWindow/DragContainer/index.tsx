import * as S from './styles'
import { DragControls } from 'framer-motion'

interface DragContainerProps {
  dragControls: DragControls
}

export function DragContainer({ dragControls }: DragContainerProps) {
  return (
    <S.DragContainer
      onPointerDown={(e) => {
        dragControls.start(e)
      }}
    />
  )
}
