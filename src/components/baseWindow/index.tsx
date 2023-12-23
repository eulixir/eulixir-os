import * as S from './styles'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { WindowControls } from './windowControls'
import { DragContainer } from './DragContainer'
import { motion, useDragControls } from 'framer-motion'
import { Process } from '../../@types/process'
import { ProcessContext } from '../../contexts/processContext'
import { savePosition } from '../../services/processes/savePosition'
import { getProcess } from '../../services/processes/getProcess'

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

const INITIAL_POSITION = { x: 10, y: 10 }

export function BaseWindow(props: BaseWindowType) {
  const { children, appname, windowstyle, appid } = props

  const [currentZIndex, setCurrentZIndex] = useState(0)
  const [position, setPosition] = useState(getCoords())

  const { getZIndex, processStack } = useContext(ProcessContext)

  function getCoords() {
    const { position } = getProcess(appid)!

    if (!position) {
      return INITIAL_POSITION
    }

    return position
  }

  const process: Process = {
    pid: appid,
    status: 'open',
    position,
  }

  const zIndex = getZIndex(process.pid)

  useEffect(() => {
    setCurrentZIndex(zIndex)
  }, [processStack, zIndex])

  const dragControls = useDragControls()

  const handleDrag = (event, info) => {
    setPosition({ x: info.point.x, y: info.point.y })
  }

  const handleDragEnd = () => {
    savePosition(appid, position.x, position.y)
  }

  return (
    <S.AppContainer
      drag
      as={motion.div}
      dragConstraints={{ top: -104, left: -1800, right: 1800, bottom: 1000 }}
      dragElastic={false}
      dragMomentum={false}
      initial={position}
      onDrag={handleDrag}
      dragControls={dragControls}
      dragListener={false}
      onDragEnd={handleDragEnd}
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
