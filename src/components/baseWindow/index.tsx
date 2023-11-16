import { ReactNode } from 'react'
import * as S from './styles'
import { WindowControls } from './windowControls'

type BaseWindowType = {
  children: ReactNode
  windowControlsFullSize: boolean
  appName: string
}

export function BaseWindow(props: BaseWindowType) {
  const { children, appName } = props
  return (
    <S.AppContainer>
      <S.ControlContainer {...props}>
        <WindowControls />
        <p>{appName}</p>
      </S.ControlContainer>
      {children}
    </S.AppContainer>
  )
}
