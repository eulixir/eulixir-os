import * as S from './styles'
import { ReactNode, useContext } from 'react'
import { WindowControls } from './windowControls'
import { DragContainer } from './DragContainer'
import { motion, useDragControls } from 'framer-motion'
import { AppWindowContext } from '../../contexts/appWindowContext'

export enum WindowStyle {
  FullSized = 'full-sized',
  Sidebar = 'sidebar',
}

export type BaseWindowType = {
  children?: ReactNode
  windowControlsFullSize: boolean
  appName: string
  windowStyle: WindowStyle
  appId: number
}

export function BaseWindow(props: BaseWindowType) {
  const { children, appName, windowStyle, appId } = props

  const { addNewAppToStack, getZIndex } = useContext(AppWindowContext)

  const zIndex = getZIndex(appId)

  const dragControls = useDragControls()

  return (
    <S.AppContainer
      drag
      as={motion.div}
      dragConstraints={{ top: -104, left: -1800, right: 1800, bottom: 1000 }}
      dragElastic={false}
      dragMomentum={false}
      dragControls={dragControls}
      dragListener={false}
      onClick={() => addNewAppToStack(appId)}
      style={{ zIndex }}
    >
      <DragContainer dragControls={dragControls} />
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
