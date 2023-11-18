import { ReactNode } from 'react'
import * as S from './styles'
import { WindowControls } from './windowControls'

export enum WindowStyle {
  FullSized = 'full-sized',
  Sidebar = 'sidebar',
}

export type BaseWindowType = {
  children?: ReactNode
  windowControlsFullSize: boolean
  appName: string
  windowStyle: WindowStyle
}

export function BaseWindow(props: BaseWindowType) {
  const { children, appName, windowStyle } = props

  return (
    <S.AppContainer>
      {windowStyle === WindowStyle.FullSized ? (
        <S.ControlContainer {...props}>
          <WindowControls />
          <p>{appName}</p>
        </S.ControlContainer>
      ) : (
        <WindowControls />
      )}

      {children}
    </S.AppContainer>
  )
}
