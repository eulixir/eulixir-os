import * as S from './styles'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { WindowControls } from './windowControls'
import { DragContainer } from './DragContainer'
import { motion, useDragControls } from 'framer-motion'
import { Process } from '../../@types/process'
import { ProcessContext } from '../../contexts/processContext'

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

  const { getZIndex, processStack } = useContext(ProcessContext)

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
    >
      <DragContainer
        process={process}
        dragControls={dragControls}
        zIndex={currentZIndex + 1}
      />
      {windowstyle === WindowStyle.FullSized ? (
        <S.ControlContainer {...props}>
          <WindowControls zIndex={zIndex + 2} pid={process.pid} />
          <p>{appname}</p>
        </S.ControlContainer>
      ) : (
        <WindowControls pid={process.pid} zIndex={zIndex + 2} />
      )}

      {children}
    </S.AppContainer>
  )
}
