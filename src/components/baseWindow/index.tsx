import * as S from './styles'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { WindowControls } from './windowControls'
import { DragContainer } from './DragContainer'
import { motion, useDragControls } from 'framer-motion'
import { AppWindowContext, Process } from '../../contexts/appWindowContext'

export enum WindowStyle {
  FullSized = 'full-sized',
  Sidebar = 'sidebar',
}

export type BaseWindowType = {
  children?: ReactNode
  windowcontrolsfullsize: string
  appname: string
  windowstyle: WindowStyle
  appid: number
}

export function BaseWindow(props: BaseWindowType) {
  const { children, appname, windowstyle, appid } = props
  const [currentZIndex, setCurrentZIndex] = useState(0)

  const { addNewProcess, getZIndex, processStack } =
    useContext(AppWindowContext)

  const process: Process = {
    pid: appid,
    status: 'open',
  }

  const zIndex = getZIndex(process)

  useEffect(() => {
    setCurrentZIndex(zIndex)
  }, [processStack, zIndex])

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
      onClick={() => addNewProcess(process)}
      style={{ zIndex: currentZIndex }}
    >
      <DragContainer dragControls={dragControls} />
      {windowstyle === WindowStyle.FullSized ? (
        <S.ControlContainer {...props}>
          <WindowControls />
          <p>{appname}</p>
        </S.ControlContainer>
      ) : (
        <WindowControls />
      )}

      {children}
    </S.AppContainer>
  )
}
