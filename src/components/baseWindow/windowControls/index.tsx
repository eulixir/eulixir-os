import { useContext } from 'react'
import * as S from './styles'
import { AppWindowContext } from '../../../contexts/appWindowContext'

interface WindowControlsProps {
  pid: number
  zIndex: number
}

export function WindowControls({ pid, zIndex }: WindowControlsProps) {
  const { closeProcess } = useContext(AppWindowContext)

  return (
    <S.WindowControlsContainer style={{ zIndex }}>
      <S.Close onClick={() => closeProcess(pid)}></S.Close>

      <S.Minimize></S.Minimize>

      <S.Maximize></S.Maximize>
    </S.WindowControlsContainer>
  )
}
